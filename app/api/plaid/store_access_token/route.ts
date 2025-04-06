import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { syncData } from '@/app/actions/plaid';

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

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { public_token } = await request.json();

    if (!public_token) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Exchange public token for access token
    const exchangeResponse = await plaidClient.itemPublicTokenExchange({
      public_token: public_token,
    });

    const accessToken = exchangeResponse.data.access_token;
    const itemId = exchangeResponse.data.item_id;

    // Store in database
    const { error } = await supabase.from('plaid_items').insert({
      user_id: user.id,
      item_id: itemId,
      access_token: accessToken,
    });

    if (error) {
      console.error('Error storing access token:', error);
      return NextResponse.json(
        { error: 'Failed to store access token' },
        { status: 500 },
      );
    }

    await syncData();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error exchanging token:', error);
    return NextResponse.json(
      { error: 'Failed to exchange token' },
      { status: 500 },
    );
  }
}
