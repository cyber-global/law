import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters
    const title = searchParams.get('title') || 'CyberLegal';
    const subtitle = searchParams.get('subtitle') || 'When cyber risk turns legal, speed and defensibility matter';
    const page = searchParams.get('page') || 'home';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 50%, #22D3EE 100%)',
            padding: '80px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Grid Pattern Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
              opacity: 0.6,
            }}
          />

          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: 48,
              fontWeight: 'bold',
              color: 'white',
              zIndex: 1,
            }}
          >
            <span style={{ color: '#FFFFFF' }}>Cyber</span>
            <span style={{ color: '#22D3EE' }}>Legal</span>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '900px',
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Footer Badges */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              zIndex: 1,
            }}
          >
            {['GDPR', 'NIS2', 'DORA', 'eIDAS2', 'EU Compliance'].map((badge) => (
              <div
                key={badge}
                style={{
                  padding: '8px 20px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '24px',
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`Error generating OG image: ${e.message}`);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}

