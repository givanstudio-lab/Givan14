import { liveShows, getUpcomingShow, getDday } from '@/data'
import { F } from '@/lib/styles'

export default function LivePage() {
  const upcoming = getUpcomingShow()
  const past = liveShows.filter(s => !s.isUpcoming)
  const dday = upcoming ? getDday(upcoming.date) : ''

  return (
    <div style={{ minHeight: '100vh', background: '#060606' }}>
      {/* 히어로 */}
      <div style={{ position: 'relative', minHeight: '240px', overflow: 'hidden', borderBottom: '0.5px solid rgba(232,228,220,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(165deg,#0e0b08 0%,#1c1510 30%,#060606 80%)' }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 48px' }}>
          <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a5a58' }}>02 — 공간과 시간 위의 감각</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#8a3a2a', padding: '4px 10px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(232,228,220,0.8)' }} />
            <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 600, color: 'rgba(232,228,220,0.9)' }}>Next Show · {dday}</span>
          </div>
        </div>
        <div style={{ position: 'absolute', right: '48px', top: '16px', fontFamily: F.en, fontSize: '80px', fontWeight: 700, color: 'rgba(232,228,220,0.04)', lineHeight: 1, userSelect: 'none' }}>
          {String(upcoming?.vol ?? 1).padStart(2, '0')}
        </div>
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'end', padding: '18px 48px 22px', borderTop: '0.5px solid rgba(232,228,220,0.08)' }}>
          <h1 style={{ fontFamily: F.en, fontSize: '34px', fontWeight: 700, color: '#e8e4dc', lineHeight: 1 }}>Live Performance</h1>
          <div>
            <div style={{ width: '16px', height: '0.5px', background: 'rgba(232,228,220,0.15)', marginBottom: '10px' }} />
            <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2 }}>감각은 공간과 시간이 만나는 순간에만 존재한다. 녹화본으로는 전달되지 않는 것들이 여기 있다.</p>
          </div>
        </div>
      </div>

      {/* 다음 공연 */}
      {upcoming && (
        <div style={{ borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58' }}>다음 공연</span>
            <span style={{ fontFamily: F.en, fontSize: '10px', fontWeight: 700, color: '#8a3a2a' }}>{dday}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(232,228,220,0.08)' }}>
            <div style={{ position: 'relative', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px', background: 'linear-gradient(150deg,#110f0c 0%,#1e1810 40%,#060606 100%)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: F.en, fontSize: '52px', fontWeight: 700, color: 'rgba(232,228,220,0.05)', lineHeight: 1 }}>{String(upcoming.vol).padStart(2, '0')}</span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: F.en, fontSize: '12px', fontWeight: 500, color: '#e8e4dc', marginBottom: '2px' }}>
                    {new Date(upcoming.date).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                  </div>
                  <div style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>
                    {new Date(upcoming.date).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })} KST
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '8px' }}>Live Performance · Vol.{upcoming.vol}</div>
                <div style={{ fontFamily: F.serif, fontSize: '22px', color: '#e8e4dc', lineHeight: 1.3 }}>{upcoming.title}</div>
              </div>
            </div>
            <div style={{ background: '#0f0f0d', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '8px' }}>{upcoming.venue}</div>
                <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2, marginBottom: '20px' }}>{upcoming.desc}</p>
                {upcoming.setlist.length > 0 && (
                  <>
                    <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '10px' }}>공연 구성</div>
                    {upcoming.setlist.map((item, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
                        <span style={{ fontFamily: F.ko, fontSize: '10px', color: '#e8e4dc' }}>{item.artist} — {item.role}</span>
                        <span style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>{item.duration}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div style={{ marginTop: '20px' }}>
                <div style={{ height: '1px', background: 'rgba(232,228,220,0.1)', marginBottom: '6px', position: 'relative' }}>
                  <div style={{ height: '1px', background: '#c4b49a', position: 'absolute', top: 0, left: 0, width: `${upcoming.soldPercent}%` }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: F.en, fontSize: '8px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '12px' }}>
                  <span>{upcoming.soldPercent}% 판매</span>
                  <span style={{ color: '#8a3a2a' }}>{dday}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ flex: 1, fontFamily: F.ko, fontSize: '12px', fontWeight: 500, color: '#060606', background: '#e8e4dc', border: 'none', padding: '12px', borderRadius: '2px', cursor: 'pointer' }}>티켓 구매하기</button>
                  <button style={{ fontFamily: F.ko, fontSize: '12px', color: 'rgba(232,228,220,0.5)', background: 'transparent', border: '0.5px solid rgba(232,228,220,0.15)', padding: '12px 16px', borderRadius: '2px', cursor: 'pointer' }}>공유</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 지난 공연 */}
      {past.length > 0 && (
        <div>
          <div style={{ padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58' }}>지난 공연</span>
          </div>
          {past.map(show => (
            <div key={show.id} style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto auto', alignItems: 'center', gap: '14px', padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)', cursor: 'pointer' }}>
              <span style={{ fontFamily: F.en, fontSize: '10px', fontWeight: 500, color: '#5a5a58' }}>Vol.{String(show.vol).padStart(2, '0')}</span>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '7px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '3px' }}>Live Performance</div>
                <div style={{ fontFamily: F.serif, fontSize: '14px', color: '#e8e4dc' }}>{show.title}</div>
              </div>
              <span style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>{new Date(show.date).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit' })}</span>
              <span style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>→</span>
            </div>
          ))}
        </div>
      )}

      {/* 알림 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', padding: '36px 48px', borderTop: '0.5px solid rgba(232,228,220,0.08)' }}>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '10px' }}>다음 공연 알림</div>
          <div style={{ fontFamily: F.serif, fontSize: '22px', color: '#e8e4dc', lineHeight: 1.4 }}>먼저 알고 싶다면 여기로.</div>
        </div>
        <div>
          <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2, marginBottom: '12px' }}>Givan Live는 공지 없이 빠르게 마감된다.</p>
          <div style={{ display: 'flex' }}>
            <input type="email" placeholder="이메일 주소" style={{ flex: 1, background: '#0f0f0d', border: '0.5px solid rgba(232,228,220,0.15)', color: '#e8e4dc', fontFamily: F.ko, fontSize: '10px', padding: '9px 12px', outline: 'none' }} />
            <button style={{ fontFamily: F.ko, fontSize: '10px', fontWeight: 500, color: '#060606', background: '#e8e4dc', border: 'none', padding: '9px 14px', cursor: 'pointer' }}>등록</button>
          </div>
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
