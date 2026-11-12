import { NextRequest, NextResponse } from 'next/server';
import { saveLeadRecord } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { success: false, error: 'Invalid or missing JSON payload.' },
        { status: 400 }
      );
    }

    const fullName = String(body.full_name || body.name || '').trim();
    const rawMobile = String(body.mobile_number || body.phone || body.mobile || '');
    const cleanMobile = rawMobile.replace(/\D/g, '');
    const state = body.state ? String(body.state).trim() : null;
    const message = body.message ? String(body.message).trim() : null;
    const sourcePage = body.source_page || '/contact-us';

    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid full name.' },
        { status: 400 }
      );
    }

    if (!cleanMobile || cleanMobile.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    const ipAddress =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || 'Unknown';

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const leadRef = `SMM-CNT-${dateStr}-${randomSuffix}`;

    const { insertId, syncedToAdmin } = await saveLeadRecord({
      form_type: 'contact',
      lead_reference: leadRef,
      full_name: fullName,
      mobile_number: cleanMobile,
      state,
      message,
      source_page: sourcePage,
      ip_address: ipAddress,
      user_agent: userAgent,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
        reference_id: leadRef,
        insert_id: insertId,
        synced_to_admin: syncedToAdmin,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('[API /api/contact] Error saving contact lead:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to send message right now. Please try again shortly.',
      },
      { status: 500 }
    );
  }
}

