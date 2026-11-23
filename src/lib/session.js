import crypto from 'crypto';

export const ADMIN_COOKIE = 'lakshie_admin_session';
export const ADMIN_MAX_AGE = 60 * 60 * 8; // 8 hours

// Admin access is configured entirely through the environment. If no password is
// set, every admin surface fails closed rather than falling back to a default.
export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

function signingSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || '';
}

function sign(value) {
  return crypto.createHmac('sha256', signingSecret()).update(value).digest('hex');
}

export function createSessionToken() {
  const expires = Date.now() + ADMIN_MAX_AGE * 1000;
  return `${expires}.${sign(String(expires))}`;
}

export function verifySessionToken(token) {
  if (typeof token !== 'string') return false;
  const [expires, signature] = token.split('.');
  if (!expires || !signature) return false;
  if (Number(expires) < Date.now()) return false;

  const expected = sign(expires);
  const a = Buffer.from(signature, 'hex');
  const b = Buffer.from(expected, 'hex');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function passwordsMatch(candidate) {
  const configured = process.env.ADMIN_PASSWORD || '';
  if (!candidate || !configured) return false;

  const a = Buffer.from(String(candidate));
  const b = Buffer.from(configured);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function readCookie(request, name) {
  const header = request?.headers?.get?.('cookie') || '';
  for (const part of header.split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return decodeURIComponent(rest.join('='));
  }
  return null;
}

export function isAdminRequest(request) {
  return verifySessionToken(readCookie(request, ADMIN_COOKIE));
}

export function unauthorized() {
  return Response.json(
    { success: false, error: 'Admin authentication required.' },
    { status: 401 }
  );
}
