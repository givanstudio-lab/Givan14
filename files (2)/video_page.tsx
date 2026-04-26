import { videos } from '@/data'
import { F, GRADS } from '@/lib/styles'

export default function VideoPage() {
  const featured = videos.find(v => v.featured)
  const rest = videos.filter(v => !v.featured)
  const cats = ['All', 'Brand Film', 'Live Record', 'Exhibition', 'Short Film']

  return (
    <div style={{ minHeight: '100vh', background: '#060606' }}>
      {/* 헤더 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'end', padding: '56px 48px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '9px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '12px' }}>01 — 감각의 번역</div>
          <h1 style={{ fontFamily: F.en, fontSize: '36px', fontWeight: 700, color: '#e8e4dc', lineHeight: 1 }}>Video Archive</h1>
        </div>
        <div>
          <div style={{ width: '16px', height: '0.5px', background: 'rgba(232,228,220,0.15)', marginBottom: '12px' }} />
          <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2 }}>
            감각이 영상이 되는 과정. Givan Studio의 모든 영상 작업은 하나의 상태를 기록하거나, 하나의 감각을 번역하거나, 하나의 공간을 재구성한다.
          </p>
        </div>
      </div>

      {/* 필터 */}
      <div style={{ display: 'flex', padding: '0 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)', overflowX: 'auto' }}>
        {cats.map((cat, i) => (
          <div key={cat} style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: i === 0 ? '#e8e4dc' : '#5a5a58', padding: '11px 13px', borderRight: '0.5px solid rgba(232,228,220,0.08)', borderBottom: i === 0 ? '0.5px solid #e8e4dc' : 'none', marginBottom: i === 0 ? '-0.5px' : 0, cursor: 'pointer', whiteSpace: 'nowrap' }}>
            {cat}
          </div>
        ))}
      </div>

      {/* 그리드 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(232,228,220,0.08)', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        {featured && (
          <div style={{ gridColumn: '1/-1', background: '#060606', cursor: 'pointer' }}>
            <div style={{ position: 'relative', aspectRatio: '21/9', background: GRADS[0] }}>
              <div style={{ position: 'absolute', top: '14px', left: '14px', fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c4b49a', border: '0.5px solid rgba(196,180,154,0.3)', padding: '2px 8px' }}>Featured</div>
            </div>
            <div style={{ padding: '14px 16px 18px', borderTop: '0.5px solid rgba(232,228,220,0.08)', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '5px' }}>{featured.category}{featured.client ? ` · ${featured.client}` : ''}</div>
                <div style={{ fontFamily: F.serif, fontSize: '16px', color: '#e8e4dc', lineHeight: 1.4, marginBottom: '4px' }}>{featured.title}</div>
                {featured.desc && <div style={{ fontFamily: F.ko, fontSize: '10px', color: 'rgba(232,228,220,0.35)', lineHeight: 1.8 }}>{featured.desc}</div>}
              </div>
              <div style={{ fontFamily: F.en, fontSize: '8px', color: '#5a5a58' }}>{featured.year}</div>
            </div>
          </div>
        )}
        {rest.map((v, i) => (
          <div key={v.id} style={{ background: '#060606', cursor: 'pointer' }}>
            <div style={{ aspectRatio: '16/9', background: GRADS[(i + 1) % GRADS.length] }} />
            <div style={{ padding: '14px 16px 18px' }}>
              <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '5px' }}>{v.category}</div>
              <div style={{ fontFamily: F.serif, fontSize: '15px', color: '#e8e4dc', lineHeight: 1.4 }}>{v.title}</div>
              <div style={{ fontFamily: F.en, fontSize: '8px', color: '#5a5a58', marginTop: '6px' }}>{v.year}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 더 보기 */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        <button style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.5)', background: 'transparent', border: '0.5px solid rgba(232,228,220,0.15)', padding: '10px 18px', borderRadius: '2px', cursor: 'pointer' }}>더 보기</button>
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
