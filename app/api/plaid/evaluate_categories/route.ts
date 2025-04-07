import { evaluateUserCategories } from '@/app/actions/plaid';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const result = await evaluateUserCategories();
  return NextResponse.json(result);
}
