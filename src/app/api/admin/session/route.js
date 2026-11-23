import { NextResponse } from 'next/server';
import { ADMIN_COOKIE, adminConfigured, isAdminRequest } from '../../../../lib/session.js';

// Whether this browser already holds a valid admin session.
export async function GET(request) {
  return NextResponse.json({
    success: true,
    authenticated: isAdminRequest(request),
    configured: adminConfigured()
  });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({ name: ADMIN_COOKIE, value: '', path: '/', maxAge: 0 });
  return response;
}
