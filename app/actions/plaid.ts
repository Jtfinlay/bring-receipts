'use server';

import { createClient } from '@/utils/supabase/server';
import { User } from '@supabase/supabase-js';

import {
  Configuration,
  CountryCode,
  LinkTokenCreateRequest,
  PlaidApi,
  PlaidEnvironments,
  Products,
  RemovedTransaction,
  Transaction,
  TransactionsSyncRequest,
} from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID!,
      'PLAID-SECRET': process.env.PLAID_SECRET!,
    },
  },
});

export const connectWithPlaid = async (): Promise<{
  error?: string;
  result?: string;
}> => {
  const plaidClient = new PlaidApi(configuration);

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'user is not valid' };
  }

  const request: LinkTokenCreateRequest = {
    user: {
      client_user_id: user.id,
    },
    client_name: 'Bring Receipts',
    products: [Products.Transactions],
    country_codes: [CountryCode.Us],
    language: 'en',
  };

  const response = await plaidClient.linkTokenCreate(request);
  console.log(response);
  return { result: response.data.link_token };
};

const syncTransactions = async function (itemId: string) {
  const supabase = await createClient();

  // Step 1: Retrieve access token and cursor from the database
  const { data, error: accessTokenError } = await supabase
    .from('plaid_items')
    .select('user_id, item_id, access_token, sync_cursor')
    .eq('item_id', itemId);

  if (accessTokenError || !data) {
    return { error: 'Error retrieving user access token' };
  }

  const { user_id, access_token, sync_cursor } = data[0];

  const summary = { added: 0, removed: 0, modified: 0 };
  const allData = await fetchNewSyncData(access_token, sync_cursor);

  // Step 2: Save new transactions to the database
  await Promise.all(
    allData.added.map(async txnObj => {
      console.log(`I want to add ${txnObj.transaction_id}`);
      const insertResult = await supabase.from('transactions').upsert({
        id: txnObj.transaction_id,
        user_id,
        item_id: itemId,
        amount: txnObj.amount,
        category: txnObj.personal_finance_category?.primary,
        category_detailed: txnObj.personal_finance_category?.detailed,
        category_confidence_level:
          txnObj.personal_finance_category?.confidence_level,
        category_icon_url: txnObj.personal_finance_category_icon_url,
        merchant_name: txnObj.merchant_name,
        transaction_date: txnObj.datetime,
        status: 'active',
      });

      if (insertResult.error) {
        console.error(insertResult.error);
      } else {
        summary.added += insertResult.count || 0;
      }
    }),
  );

  // Step 3: Update modified transactions in the database
  await Promise.all(
    allData.modified.map(async txnObj => {
      console.log(`I want to modify ${txnObj.transaction_id}`);
      const updateResult = await supabase
        .from('transactions')
        .update({
          amount: txnObj.amount,
          category: txnObj.personal_finance_category,
          merchant_name: txnObj.merchant_name,
          transaction_date: txnObj.datetime,
          status: 'active',
        })
        .eq('id', txnObj.transaction_id);

      if (updateResult.error) {
        console.error(updateResult.error);
      } else {
        summary.modified += updateResult.count || 0;
      }
    }),
  );

  // Step 4: Update deleted transactions' status
  await Promise.all(
    allData.removed.map(async txnObj => {
      console.log(`I want to remove ${txnObj.transaction_id}`);
      const removedResult = await supabase
        .from('transactions')
        .update({
          status: 'removed',
        })
        .eq('id', txnObj.transaction_id);

      if (removedResult.error) {
        console.error(removedResult.error);
      } else {
        summary.removed += removedResult.count || 0;
      }
    }),
  );

  // Step 5: Update the stored cursor
  console.log(`The last cursor value was ${allData.nextCursor}`);
  const cursorResult = await supabase
    .from('plaid_items')
    .update({
      sync_cursor: allData.nextCursor,
      last_sync: new Date(Date.now()).toISOString(),
    })
    .eq('item_id', itemId);

  if (cursorResult.error) {
    console.error('Could not update cursor value!', cursorResult.error);
  }

  // Step 6: If user is in initial state, update them to "synced"
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('id, status')
    .eq('id', user_id);

  if (error) {
    console.error('Unable to retrieve profile!', error);
  } else if (profile[0].status === 'initial') {
    await supabase
      .from('profiles')
      .update({ status: 'synced' })
      .eq('id', user_id);
  }

  console.log(summary);
  return summary;
};

interface IData {
  added: Transaction[];
  removed: RemovedTransaction[];
  modified: Transaction[];
  nextCursor?: string;
}

const fetchNewSyncData = async (
  accessToken: string,
  initialCursor: string,
  retriesLeft = 3,
): Promise<IData> => {
  const plaidClient = new PlaidApi(configuration);
  const allData: IData = {
    added: [],
    removed: [],
    modified: [],
    nextCursor: initialCursor,
  };

  if (retriesLeft <= 0) {
    console.error('Too many retries!');
    // Return no data and keep original cursor. Try again later.
    return allData;
  }

  try {
    let keepGoing = true;
    while (keepGoing) {
      const results = await plaidClient.transactionsSync({
        access_token: accessToken,
        cursor: allData.nextCursor,
      });
      const newData = results.data;

      allData.added = allData.added.concat(newData.added);
      allData.modified = allData.modified.concat(newData.modified);
      allData.removed = allData.removed.concat(newData.removed);
      allData.nextCursor = allData.nextCursor;
      keepGoing = newData.has_more;

      console.log(
        `Added: ${newData.added.length} Modified: ${newData.modified.length} Removed: ${newData.removed.length} `,
      );
    }
    return allData;
  } catch (error) {
    // If you want to see if this is a sync mutation error, you can look at
    // error?.response?.data?.error_code
    console.log(
      `Oh no! Error! ${JSON.stringify(
        error,
      )} Let's try again from the beginning!`,
    );
    return fetchNewSyncData(accessToken, initialCursor, retriesLeft - 1);
  }
};

export const syncData = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'user is not valid' };
  }

  const { data: items, error: itemIdError } = await supabase
    .from('plaid_items')
    .select('user_id, item_id, access_token')
    .eq('user_id', user.id);

  if (itemIdError) {
    return { error: 'Error retrieving item ids' };
  }

  const results = await Promise.all(
    items.map(async item => await syncTransactions(item.item_id)),
  );
  return { result: 'success' };
};

export const evaluateUserCategories = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'user is not valid' };
  }

  const { data, error } = await supabase
    .from('transactions')
    .select('category, amount.sum()')
    .eq('user_id', user.id);

  if (error) {
    return { error: 'unable to query transactions' };
  }

  console.log(data);
};
