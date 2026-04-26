import { fundingProjects, getFundingPercent, getDday, formatPrice } from '@/data'
import { F } from '@/lib/styles'

export default function FundingPage() {
  const open = fundingProjects.filter(f => f.isOpen)
  const closed = fundingProjects.filter(f => !f.isOpen)

  return (
    <div style={{ minHeight: '100vh', background: '#060606' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'end', padding: '56px 48px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '9px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '12px' }}>06 — 관객의 참여</div>
          <h1 style={{ fontFamily: F.serif, fontSize: '40px', color: '#e8e4dc', lineHeight: 1.25 }}>Givan Funding</h1>
        </div>
        <div>
          <div style={{ width: '16px', height: '0.5px', background: 'rgba(232,228,220,0.15)', marginBottom: '12px' }} />
          <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2 }}>단순한 후원이 아니다. 전시 티켓, 라이브 초대권을 통해 관객이 프로젝트의 구조 안으로 들어온다.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(232,228,220,0.08)', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        {[{ num: '01', t: '티켓으로 참여한다', d: '라이브, 전시 티켓이 곧 펀딩 참여다.' }, { num: '02', t: '감각을 예약한다', d: '먼저 믿고 들어오는 관객이 완성한다.' }, { num: '03', t: '기록으로 남는다', d: '모든 프로젝트는 아카이브된다.' }].map(s => (
          <div key={s.num} style={{ background: '#060606', padding: '28px 32px' }}>
            <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '12px' }}>구조 {s.num}</div>
            <div style={{ fontFamily: F.serif, fontSize: '16px', color: '#e8e4dc', lineHeight: 1.4, marginBottom: '8px' }}>{s.t}</div>
            <div style={{ fontFamily: F.ko, fontSize: '10px', color: 'rgba(232,228,220,0.35)', lineHeight: 1.8 }}>{s.d}</div>
          </div>
        ))}
      </div>

      {open.map(proj => {
        const pct = getFundingPercent(proj)
        const dday = getDday(proj.deadline)
        return (
          <div key={proj.id} style={{ borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
              <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58' }}>현재 진행 중</span>
              <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 600, color: 'rgba(232,228,220,0.9)', background: '#8a3a2a', padding: '3px 9px' }}>Funding Open</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(232,228,220,0.08)' }}>
              <div style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px', background: 'linear-gradient(150deg,#110f0c 0%,#1e1810 40%,#060606 100%)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: F.en, fontSize: '52px', fontWeight: 700, color: 'rgba(232,228,220,0.05)', lineHeight: 1 }}>{String(proj.vol).padStart(2, '0')}</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: F.en, fontSize: '12px', fontWeight: 500, color: '#e8e4dc', marginBottom: '2px' }}>마감 {proj.deadline}</div>
                    <div style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>{dday}</div>
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '8px' }}>Funding Vol.{proj.vol}</div>
                  <div style={{ fontFamily: F.serif, fontSize: '22px', color: '#e8e4dc', lineHeight: 1.3 }}>{proj.title}</div>
                </div>
              </div>
              <div style={{ background: '#0f0f0d', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2, marginBottom: '18px' }}>{proj.desc}</p>
                  <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '10px' }}>티켓 선택</div>
                  {proj.tiers.map((tier, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
                      <span style={{ fontFamily: F.ko, fontSize: '10px', color: '#e8e4dc' }}>{tier.name}</span>
                      <span style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>{formatPrice(tier.price)} · 잔여 {tier.remaining}석</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '18px' }}>
                  <div style={{ height: '1px', background: 'rgba(232,228,220,0.1)', marginBottom: '6px', position: 'relative' }}>
                    <div style={{ height: '1px', background: '#c4b49a', position: 'absolute', top: 0, left: 0, width: `${pct}%` }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: F.en, fontSize: '8px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '12px' }}>
                    <span>{pct}% 달성</span>
                    <span style={{ color: '#8a3a2a' }}>{dday}</span>
                  </div>
                  <button style={{ width: '100%', fontFamily: F.ko, fontSize: '12px', fontWeight: 500, color: '#060606', background: '#e8e4dc', border: 'none', padding: '12px', borderRadius: '2px', cursor: 'pointer' }}>티켓 구매하기</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {closed.length > 0 && (
        <div>
          <div style={{ padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58' }}>지난 펀딩</span>
          </div>
          {closed.map(proj => (
            <div key={proj.id} style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto auto', alignItems: 'center', gap: '14px', padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)', cursor: 'pointer' }}>
              <span style={{ fontFamily: F.en, fontSize: '10px', fontWeight: 500, color: '#5a5a58' }}>Vol.{String(proj.vol).padStart(2, '0')}</span>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '7px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '3px' }}>Funding</div>
                <div style={{ fontFamily: F.serif, fontSize: '14px', color: '#e8e4dc' }}>{proj.title}</div>
              </div>
              <span style={{ fontFamily: F.en, fontSize: '9px', color: '#5a5a58' }}>{proj.deadline.slice(0, 7)}</span>
              <span style={{ fontFamily: F.en, fontSize: '9px', color: 'rgba(232,228,220,0.3)' }}>100% →</span>
            </div>
          ))}
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
