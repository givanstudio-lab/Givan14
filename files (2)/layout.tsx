import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Givan Studio',
  description: '감각을 설계하는 스튜디오',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body style={{ background: '#060606', color: '#e8e4dc', minHeight: '100vh' }}>
        <nav style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          padding: '0 40px',
          height: '58px',
          borderBottom: '0.5px solid rgba(232,228,220,0.08)',
          background: '#060606',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}>
          <div>
            <Link href="/brands" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#5a5a58',
              textDecoration: 'none',
            }}>
              For Brands
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#e8e4dc',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}>
              Givan Studio
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/store" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#060606',
              background: '#e8e4dc',
              borderRadius: '40px',
              padding: '5px 16px',
              textDecoration: 'none',
            }}>
              Store
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
