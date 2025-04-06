import {
  Configuration,
  CountryCode,
  PlaidApi,
  PlaidEnvironments,
  Products,
} from 'plaid';
import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

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

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(req.cookies);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const request = {
      user: {
        client_user_id: user.id,
      },
      client_name: 'Bring Receipts',
      products: [Products.Transactions],
      country_codes: [CountryCode.Us],
      language: 'en',
    };

    const response = await plaidClient.linkTokenCreate(request);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error creating link token:', error);
    return NextResponse.json(
      { error: 'Failed to create link token' },
      { status: 500 },
    );
  }
}
