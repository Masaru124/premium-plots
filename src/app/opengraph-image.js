import { ImageResponse } from 'next/og';

export const alt = 'Setty Relators — premium plots and luxury villas in Bengaluru and Dubai';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0B192C',
          padding: '64px 72px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 20, height: 20, background: '#D4AF37' }} />
          <div style={{ color: '#E9C349', fontSize: 26, letterSpacing: 2 }}>SETTY RELATORS</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#FBFBFD', fontSize: 76, lineHeight: 1.05, maxWidth: 900 }}>
            Premium plots in Bangalore
          </div>
          <div style={{ color: '#FBFBFD', fontSize: 76, lineHeight: 1.05, maxWidth: 900 }}>
            and luxury villas
          </div>
          <div style={{ marginTop: 28, color: 'rgba(251,251,253,0.7)', fontSize: 30 }}>
            Bengaluru · Dubai — approvals read before listing, zero brokerage to buyers
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(251,251,253,0.55)', fontSize: 24 }}>
          <span>settyrelators.com</span>
          <span>+91 84319 09508</span>
        </div>
      </div>
    ),
    size
  );
}
