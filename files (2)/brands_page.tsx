import { F } from '@/lib/styles'

const services = [
  { num: '01', cat: 'Collaboration', title: 'Givan의 프로젝트 안으로 들어온다', desc: '진행 중인 전시, 라이브, 영상 프로젝트에 브랜드가 함께 참여하는 구조. 감각 방향이 맞는 브랜드에게만 열려 있다.', tags: ['Exhibition', 'Live', 'Video'] },
  { num: '02', cat: 'Brand / Art Direction', title: '브랜드의 감각 기준을 설계한다', desc: '브랜드 진단 → 감각 방향 수립 → 월별 아트 디렉션. 감각 기준 없이 운영 중인 브랜드에 적합하다.', tags: ['Brand Diagnosis', 'Monthly AD'] },
  { num: '03', cat: 'Video Direction', title: '감각이 영상 안으로 번역된다', desc: '촬영 전 화면 감각과 구조를 먼저 설계한다. 브랜드 필름 방향을 먼저 정리하고 싶은 팀에 적합하다.', tags: ['Brand Film', 'Documentary'] },
  { num: '04', cat: 'Technical Direction', title: '기술이 감각과 구조를 구현한다', desc: '기술 선택 이전에 감각적으로 맞는 방식이 무엇인지 설계한다. 인터랙션이 필요하지만 방향이 없는 팀.', tags: ['Tech Structure', 'Interaction'] },
]

export default function BrandsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#060606' }}>
      <div style={{ padding: '56px 48px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        <div style={{ fontFamily: F.en, fontSize: '9px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '16px' }}>07 — 감각의 이식</div>
        <h1 style={{ fontFamily: F.serif, fontSize: '44px', color: '#e8e4dc', lineHeight: 1.25, marginBottom: '16px' }}>브랜드에<br />감각을 이식한다.</h1>
        <p style={{ fontFamily: F.ko, fontSize: '12px', color: 'rgba(232,228,220,0.4)', lineHeight: 2, maxWidth: '500px', marginBottom: '12px' }}>Givan Studio는 브랜드 컨설팅 회사가 아니다. 영상, 공연, 전시, 제품을 통해 감각을 설계해온 스튜디오가 브랜드의 구조 안에 들어가는 방식이다.</p>
        <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.2)', lineHeight: 2 }}>영업용 제안서를 보내지 않는다. 감각이 맞는 브랜드와만 일한다.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(232,228,220,0.08)', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        {services.map(s => (
          <div key={s.num} style={{ background: '#060606', padding: '36px 32px' }}>
            <div style={{ fontFamily: F.en, fontSize: '9px', fontWeight: 500, color: '#5a5a58', marginBottom: '12px' }}>{s.num}</div>
            <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '10px' }}>{s.cat}</div>
            <div style={{ fontFamily: F.serif, fontSize: '20px', color: '#e8e4dc', lineHeight: 1.4, marginBottom: '10px' }}>{s.title}</div>
            <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.35)', lineHeight: 1.9, marginBottom: '14px' }}>{s.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {s.tags.map(tag => (
                <span key={tag} style={{ fontFamily: F.en, fontSize: '7px', fontWeight: 500, color: '#5a5a58', border: '0.5px solid rgba(232,228,220,0.15)', padding: '2px 6px' }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: '20px', padding: '36px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)', background: '#0f0f0d' }}>
        <div style={{ fontFamily: F.ko, fontSize: '10px', color: '#5a5a58', lineHeight: 2 }}>이런 브랜드와 일하지 않는다<br /><br />이런 브랜드와 일한다</div>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(232,228,220,0.25)', marginBottom: '10px', paddingBottom: '6px', borderBottom: '0.5px solid rgba(232,228,220,0.15)' }}>함께하기 어려운 경우</div>
          {['빠른 결과물이 필요한 경우', '트렌드만 따라가는 브랜드', '단순 제작 외주를 원하는 경우', 'Givan의 방식에 개입하려는 경우'].map(t => (
            <div key={t} style={{ display: 'flex', gap: '7px', padding: '6px 0', borderBottom: '0.5px solid rgba(232,228,220,0.08)', fontFamily: F.ko, fontSize: '10px', color: 'rgba(232,228,220,0.35)' }}>
              <span style={{ color: '#5a5a58' }}>—</span>{t}
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c4b49a', marginBottom: '10px', paddingBottom: '6px', borderBottom: '0.5px solid rgba(232,228,220,0.15)' }}>함께하고 싶은 경우</div>
          {['감각 기준을 갖고 싶은 브랜드', '장기적 감각 구조를 만들고 싶은 경우', 'Givan의 감각 세계에 공명하는 브랜드', '제작보다 방향이 먼저 필요한 경우'].map(t => (
            <div key={t} style={{ display: 'flex', gap: '7px', padding: '6px 0', borderBottom: '0.5px solid rgba(232,228,220,0.08)', fontFamily: F.ko, fontSize: '10px', color: 'rgba(232,228,220,0.55)' }}>
              <span style={{ color: '#c4b49a' }}>·</span>{t}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '48px' }}>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '12px' }}>협업 문의</div>
          <div style={{ fontFamily: F.serif, fontSize: '30px', color: '#e8e4dc', lineHeight: 1.4, marginBottom: '14px' }}>감각이 맞는다면<br />연락하라.</div>
          <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2 }}>제안서 형식은 필요 없다. 브랜드가 지금 어떤 상태에 있고, 왜 Givan과 이야기하고 싶은지만 써서 보내면 된다.</p>
        </div>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '13px', color: '#e8e4dc', padding: '16px 0', borderBottom: '0.5px solid rgba(232,228,220,0.08)', marginBottom: '18px' }}>givan.studio@gmail.com</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ fontFamily: F.ko, fontSize: '12px', fontWeight: 500, color: '#060606', background: '#e8e4dc', border: 'none', padding: '12px 22px', borderRadius: '2px', cursor: 'pointer' }}>메일 보내기</button>
            <button style={{ fontFamily: F.ko, fontSize: '12px', color: 'rgba(232,228,220,0.5)', background: 'transparent', border: '0.5px solid rgba(232,228,220,0.15)', padding: '12px 18px', borderRadius: '2px', cursor: 'pointer' }}>Instagram →</button>
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
