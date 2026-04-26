import { exhibitions, getCurrentExhibition } from '@/data'
import { F, GRADS } from '@/lib/styles'

export default function ExhibitionPage() {
  const current = getCurrentExhibition()
  const past = exhibitions.filter(e => !e.isCurrent)

  return (
    <div style={{ minHeight: '100vh', background: '#060606' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'end', padding: '56px 48px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '9px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '12px' }}>03 — 정지된 감각</div>
          <h1 style={{ fontFamily: F.en, fontSize: '36px', fontWeight: 700, color: '#e8e4dc', lineHeight: 1 }}>Exhibition Archive</h1>
        </div>
        <div>
          <div style={{ width: '16px', height: '0.5px', background: 'rgba(232,228,220,0.15)', marginBottom: '12px' }} />
          <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2 }}>움직임을 멈춘 감각이 공간 안에 밀도로 쌓인다. 감각의 상태를 공간으로 번역한다.</p>
        </div>
      </div>

      {current && (
        <div style={{ borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58' }}>현재 전시</span>
            <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, color: '#c4b49a', border: '0.5px solid rgba(196,180,154,0.3)', padding: '2px 8px' }}>On View</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(232,228,220,0.08)' }}>
            <div style={{ position: 'relative', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px', background: 'linear-gradient(145deg,#100e0c 0%,#1e1a14 35%,#0a0908 100%)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: F.en, fontSize: '60px', fontWeight: 700, color: 'rgba(232,228,220,0.04)', lineHeight: 1 }}>{String(current.vol ?? 1).padStart(2, '0')}</span>
                <div style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58', textAlign: 'right', lineHeight: 1.8 }}>{current.startDate}<br />— {current.endDate}</div>
              </div>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '8px' }}>{current.type} Exhibition · Givan Studio</div>
                <div style={{ fontFamily: F.serif, fontSize: '24px', color: '#e8e4dc', lineHeight: 1.3 }}>{current.title}</div>
              </div>
            </div>
            <div style={{ background: '#0f0f0d', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '8px' }}>{current.venue}</div>
                <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2, marginBottom: '20px' }}>{current.desc}</p>
                {current.works.length > 0 && (
                  <>
                    <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '10px' }}>전시 구성</div>
                    {current.works.map((w, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
                        <span style={{ fontFamily: F.ko, fontSize: '10px', color: '#e8e4dc' }}>{w.workTitle} — {w.medium}</span>
                        <span style={{ fontFamily: F.ko, fontSize: '9px', color: '#5a5a58' }}>{w.artist}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
                <button style={{ flex: 1, fontFamily: F.ko, fontSize: '12px', fontWeight: 500, color: '#060606', background: '#e8e4dc', border: 'none', padding: '12px', borderRadius: '2px', cursor: 'pointer' }}>Funding으로 입장</button>
                <button style={{ fontFamily: F.ko, fontSize: '12px', color: 'rgba(232,228,220,0.5)', background: 'transparent', border: '0.5px solid rgba(232,228,220,0.15)', padding: '12px 16px', borderRadius: '2px', cursor: 'pointer' }}>공유</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {past.length > 0 && (
        <div>
          <div style={{ padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58' }}>지난 전시</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(232,228,220,0.08)', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            {past.map((exh, i) => (
              <div key={exh.id} style={{ background: '#060606', cursor: 'pointer' }}>
                <div style={{ aspectRatio: '4/3', background: GRADS[i % GRADS.length] }} />
                <div style={{ padding: '12px 14px 16px' }}>
                  <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '5px' }}>{exh.type} Exhibition</div>
                  <div style={{ fontFamily: F.serif, fontSize: '14px', color: '#e8e4dc', lineHeight: 1.4 }}>{exh.title}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '0.5px solid rgba(232,228,220,0.08)', marginTop: '8px' }}>
                    <span style={{ fontFamily: F.en, fontSize: '8px', color: '#5a5a58' }}>{exh.startDate.slice(0, 7)} — {exh.endDate.slice(0, 7)}</span>
                    <span style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
