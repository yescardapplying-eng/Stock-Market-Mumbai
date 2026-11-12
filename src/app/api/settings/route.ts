import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      popup_enabled: true,
      popup_delay_ms: 1000,
      popup_heading: 'Stock Market Mumbai',
    },
  });
}

