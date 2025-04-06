import { createClient } from '@/utils/supabase/server';
import { syncData } from '@/app/actions/plaid';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await syncData();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error performing transaction sync:', error);
    return NextResponse.json(
      { error: 'Failed to perform sync' },
      { status: 500 },
    );
  }
}
