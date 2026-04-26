import { artists } from '@/data'
import { F, GRADS } from '@/lib/styles'

export default function ArtistPage() {
  const featured = artists.find(a => a.isFeatured)
  const rest = artists.filter(a => !a.isFeatured)

  return (
    <div style={{ minHeight: '100vh', background: '#060606' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'end', padding: '56px 48px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '9px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '12px' }}>05 — 감각의 거처</div>
          <h1 style={{ fontFamily: F.en, fontSize: '36px', fontWeight: 700, color: '#e8e4dc', lineHeight: 1 }}>Artist House</h1>
        </div>
        <div>
          <div style={{ width: '16px', height: '0.5px', background: 'rgba(232,228,220,0.15)', marginBottom: '12px' }} />
          <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2 }}>Givan Artist House는 아티스트의 작업이 흩어지지 않도록 정리하고, 발매하고, 공연시키고, 영상화하고, 브랜드 프로젝트와 연결하는 감각 기반 소속 시스템이다.</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '18px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)', background: '#0f0f0d' }}>
        <div style={{ width: '1px', height: '32px', background: 'rgba(232,228,220,0.15)' }} />
        <p style={{ fontFamily: F.ko, fontSize: '12px', color: 'rgba(232,228,220,0.4)', lineHeight: 2 }}>"혼자 흩어질 뻔한 작업들이 여기서 맥락을 얻고, 관객을 만나고, 물건이 된다."</p>
      </div>

      {featured && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(232,228,220,0.08)', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
          <div style={{ position: 'relative', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px', background: 'linear-gradient(160deg,#0f0d0b 0%,#1c1814 40%,#080706 100%)' }}>
            <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, color: '#c4b49a' }}>Featured Artist</div>
            <div>
              <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '8px' }}>{featured.type} · {featured.genre}</div>
              <div style={{ fontFamily: F.serif, fontSize: '28px', color: '#e8e4dc' }}>{featured.name}</div>
            </div>
          </div>
          <div style={{ background: '#0f0f0d', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '8px' }}>Sound Artist · Founder</div>
              <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2, marginBottom: '20px' }}>{featured.bio}</p>
              <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '10px' }}>최근 작업</div>
              {featured.works.map((w, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
                  <span style={{ fontFamily: F.ko, fontSize: '10px', color: '#e8e4dc' }}>{w.workTitle}</span>
                  <span style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>{w.year}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px' }}>
              <button style={{ fontFamily: F.ko, fontSize: '12px', fontWeight: 500, color: '#060606', background: '#e8e4dc', border: 'none', padding: '12px 22px', borderRadius: '2px', cursor: 'pointer' }}>작업 전체 보기</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(232,228,220,0.08)', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        {rest.map((artist, i) => (
          <div key={artist.id} style={{ background: '#060606', display: 'grid', gridTemplateColumns: '110px 1fr', cursor: 'pointer' }}>
            <div style={{ aspectRatio: '3/4', background: GRADS[i % GRADS.length] }} />
            <div style={{ padding: '14px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '5px' }}>{artist.type}</div>
                <div style={{ fontFamily: F.serif, fontSize: '16px', color: '#e8e4dc', marginBottom: '3px' }}>{artist.name}</div>
                <div style={{ fontFamily: F.en, fontSize: '8px', color: 'rgba(232,228,220,0.3)', marginBottom: '8px' }}>{artist.genre}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                  {artist.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: F.en, fontSize: '7px', fontWeight: 500, color: '#5a5a58', border: '0.5px solid rgba(232,228,220,0.15)', padding: '2px 5px' }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '0.5px solid rgba(232,228,220,0.08)', marginTop: '8px' }}>
                <span style={{ fontFamily: F.en, fontSize: '8px', color: '#5a5a58' }}>작업 {artist.works.length}개</span>
                <span style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>→</span>
              </div>
            </div>
          </div>
        ))}
        {[...Array(Math.max(0, 2 - rest.length))].map((_, i) => (
          <div key={`empty-${i}`} style={{ background: '#060606', display: 'grid', gridTemplateColumns: '110px 1fr', opacity: 0.3 }}>
            <div style={{ aspectRatio: '3/4', background: '#0c0c0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: F.ko, fontSize: '8px', color: 'rgba(232,228,220,0.2)' }}>모집 중</span>
            </div>
            <div style={{ padding: '14px 12px' }}>
              <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58' }}>Givan Sound</div>
              <div style={{ fontFamily: F.serif, fontSize: '16px', color: 'rgba(232,228,220,0.2)', marginTop: '4px' }}>—</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', padding: '36px 48px' }}>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '10px' }}>Artist House · 합류</div>
          <div style={{ fontFamily: F.serif, fontSize: '24px', color: '#e8e4dc', lineHeight: 1.4 }}>감각이 있다면 여기로.</div>
        </div>
        <div>
          <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2, marginBottom: '14px' }}>작업만 있는 아티스트를 선택합니다. 기획력, 마케팅, 유통 구조는 Givan이 담당합니다.</p>
          <button style={{ fontFamily: F.ko, fontSize: '12px', fontWeight: 500, color: '#060606', background: '#e8e4dc', border: 'none', padding: '12px 22px', borderRadius: '2px', cursor: 'pointer' }}>합류 문의하기</button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 48px', borderTop: '0.5px solid rgba(232,228,220,0.08)' }}>
        <span style={{ fontFamily: F.en, fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e8e4dc' }}>Givan Studio</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span style={{ fontFamily: F.en, fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(232,228,220,0.22)' }}>Instagram</span>
          <span style={{ fontFamily: F.en, fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(232,228,220,0.22)' }}>givan.studio@gmail.com</span>
        </div>
      </div>
    </div>
  )
}
