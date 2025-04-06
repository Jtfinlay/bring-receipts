import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
import { createClient } from '@/utils/supabase/server';
import { serve } from '@upstash/workflow/nextjs';
import { NextRequest } from 'next/server';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID!,
      'PLAID-SECRET': process.env.PLAID_SECRET!,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

async function getPlaidTransactions(accessToken: string, lastScan: Date) {
  const response = await plaidClient.transactionsGet({
    access_token: accessToken,
    start_date: lastScan.toISOString().split('T')[0],
    end_date: new Date().toISOString().split('T')[0],
  });

  return response.data.transactions;
}

interface IRequestBody {
  userId: string;
}

export const POST = async (request: NextRequest) => {
  const body: IRequestBody = await request.json();

  const { POST: handler } = serve(async context => {
    const supabase = await createClient();

    const { data: tokenData, error } = await supabase
      .from('plaid_access_tokens')
      .select('access_token, last_sync')
      .eq('user_id', body.userId)
      .single();

    if (error || !tokenData) {
      throw new Error('No Plaid connection found');
    }

    const transactions = await getPlaidTransactions(
      tokenData.access_token,
      tokenData.last_sync,
    );

    const { error: transactionError } = await supabase
      .from('transactions')
      .insert(transactions);

    if (transactionError) {
      console.error(
        `Failed to insert transactions batch for ${body.userId}:`,
        transactionError,
      );
      return;
    }

    tokenData.last_sync = new Date();
    const { error: insertError } = await supabase
      .from('plaid_access_tokens')
      .insert(tokenData);

    if (insertError) {
      console.error(
        `Failed to update last_sync after fetching transactions from ${body.userId}`,
        insertError,
      );
    }
  });

  return await handler(request);
};
