import Link from 'next/link'

const S = {
  hero: {
    position: 'relative' as const,
    width: '100%',
    height: 'calc(100svh - 58px)',
    background: '#060606',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  center: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '16px',
    zIndex: 2,
  },
  eyebrow: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: '11px',
    letterSpacing: '0.22em',
    color: 'rgba(232,228,220,0.4)',
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(36px, 5vw, 64px)',
    fontWeight: 700,
    letterSpacing: '0.04em',
    color: '#e8e4dc',
    textAlign: 'center' as const,
  },
  sub: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '9px',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'rgba(232,228,220,0.28)',
    textAlign: 'center' as const,
    lineHeight: 2.4,
  },
  divider: {
    width: '120px',
    height: '0.5px',
    background: 'rgba(232,228,220,0.12)',
  },
  btns: {
    display: 'flex',
    gap: '10px',
    marginTop: '8px',
  },
  btnPrimary: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: '12px',
    fontWeight: 500,
    color: '#060606',
    background: '#e8e4dc',
    border: 'none',
    padding: '11px 26px',
    borderRadius: '2px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
  btnGhost: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: '12px',
    fontWeight: 400,
    color: 'rgba(232,228,220,0.55)',
    background: 'transparent',
    border: '0.5px solid rgba(232,228,220,0.2)',
    padding: '11px 20px',
    borderRadius: '2px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
  mani: {
    position: 'absolute' as const,
    bottom: '52px',
    left: '40px',
    maxWidth: '220px',
  },
  maniLine: {
    width: '16px',
    height: '0.5px',
    background: 'rgba(232,228,220,0.15)',
    marginBottom: '8px',
  },
  maniText: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: '10px',
    lineHeight: 2,
    color: 'rgba(232,228,220,0.2)',
  },
  nav2: {
    position: 'absolute' as const,
    bottom: '52px',
    right: '40px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  navItem: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '8px',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'rgba(232,228,220,0.25)',
    textDecoration: 'none',
  },
  footer: {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '14px 40px',
  },
  footerLink: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '8px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'rgba(232,228,220,0.18)',
  },
}

const PAGE_LINKS = [
  { href: '/video', label: 'Video' },
  { href: '/live', label: 'Live' },
  { href: '/exhibition', label: 'Exhibition' },
  { href: '/store', label: 'Store' },
  { href: '/artist', label: 'Artist House' },
  { href: '/funding', label: 'Funding' },
  { href: '/brands', label: 'For Brands' },
]

export default function HomePage() {
  return (
    <div style={S.hero}>
      {/* 가운데 콘텐츠 */}
      <div style={S.center}>
        <div style={S.eyebrow}>감각을 설계하는 스튜디오</div>
        <div style={S.title}>Givan Studio</div>
        <div style={S.divider} />
        <div style={S.sub}>
          Video · Live · Exhibition<br />
          Store · Artist House · Funding · For Brands
        </div>
        <div style={S.btns}>
          <Link href="/store" style={S.btnPrimary}>스토어 입장</Link>
          <Link href="/video" style={S.btnGhost}>작업 보기</Link>
        </div>
      </div>

      {/* 왼쪽 하단 — 소개 */}
      <div style={S.mani}>
        <div style={S.maniLine} />
        <div style={S.maniText}>
          하나의 감각은 영상이 되고, 공연이 되고, 전시가 되고, 물건이 된다.
          Givan Studio는 그 과정을 설계하고 유통하는 스튜디오다.
        </div>
      </div>

      {/* 오른쪽 하단 — 페이지 링크 */}
      <div style={S.nav2}>
        {PAGE_LINKS.map(p => (
          <Link key={p.href} href={p.href} style={S.navItem}>{p.label}</Link>
        ))}
      </div>

      {/* 하단 바 */}
      <div style={S.footer}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={S.footerLink}>Instagram</span>
          <span style={S.footerLink}>givan.studio@gmail.com</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '0.5px', height: '22px', background: 'rgba(232,228,220,0.08)' }} />
          <span style={{ ...S.footerLink, fontSize: '7px' }}>Scroll</span>
        </div>
      </div>
    </div>
  )
}
