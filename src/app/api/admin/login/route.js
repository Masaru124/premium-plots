import { NextResponse } from 'next/server';
import {
  ADMIN_COOKIE,
  ADMIN_MAX_AGE,
  adminConfigured,
  createSessionToken,
  passwordsMatch
} from '../../../../lib/session.js';

export async function POST(request) {
  if (!adminConfigured()) {
    return NextResponse.json(
      {
        success: false,
        error: 'Admin access is not configured. Set ADMIN_PASSWORD in the environment.'
      },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 });
  }

  if (!passwordsMatch(body?.password)) {
    return NextResponse.json(
      { success: false, error: 'That passcode is not valid.' },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: ADMIN_COOKIE,
    value: createSessionToken(),
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: ADMIN_MAX_AGE
  });
  return response;
}
