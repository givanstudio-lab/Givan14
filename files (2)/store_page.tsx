import { products, getFeaturedProduct, formatPrice } from '@/data'
import { F, GRADS } from '@/lib/styles'

export default function StorePage() {
  const featured = getFeaturedProduct()
  const videoObjects = products.filter(p => p.category === 'Video Object')
  const rest = products.filter(p => !p.isFeatured && p.category !== 'Video Object')

  return (
    <div style={{ minHeight: '100vh', background: '#060606' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'end', padding: '56px 48px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        <div>
          <div style={{ fontFamily: F.en, fontSize: '9px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '12px' }}>Givan Video — 제품</div>
          <h1 style={{ fontFamily: F.serif, fontSize: '40px', color: '#e8e4dc', lineHeight: 1.25 }}>감각이<br />물건이 된다.</h1>
        </div>
        <div>
          <div style={{ width: '16px', height: '0.5px', background: 'rgba(232,228,220,0.15)', marginBottom: '12px' }} />
          <p style={{ fontFamily: F.ko, fontSize: '12px', color: 'rgba(232,228,220,0.4)', lineHeight: 2 }}>Givan Store는 단순한 쇼핑몰이 아니다. 전시되고, 연주되고, 기록된 감각이 물건의 형태로 번역되는 공간이다.</p>
        </div>
      </div>

      {/* 이달의 제품 */}
      {featured && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a5a58' }}>이달의 제품</span>
            <span style={{ fontFamily: F.en, fontSize: '8px', color: '#c4b49a' }}>한정 {featured.stock + 23}개</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(232,228,220,0.08)', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', background: GRADS[0] }}>
              <div style={{ position: 'absolute', top: '18px', left: '18px', fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c4b49a', border: '0.5px solid rgba(196,180,154,0.3)', padding: '3px 8px' }}>Featured · 이달의 제품</div>
            </div>
            <div style={{ background: '#0f0f0d', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '10px' }}>{featured.category} · Givan Video</div>
                <div style={{ fontFamily: F.serif, fontSize: '26px', color: '#e8e4dc', lineHeight: 1.3, marginBottom: '10px' }}>{featured.name}</div>
                <p style={{ fontFamily: F.ko, fontSize: '11px', color: 'rgba(232,228,220,0.4)', lineHeight: 2, marginBottom: '20px' }}>{featured.desc}</p>
                {featured.linkedWork && <div style={{ fontFamily: F.en, fontSize: '8px', color: '#5a5a58', marginBottom: '20px' }}>← {featured.linkedWork}에서 파생</div>}
              </div>
              <div>
                <div style={{ fontFamily: F.en, fontSize: '28px', fontWeight: 600, color: '#e8e4dc', marginBottom: '4px' }}>{formatPrice(featured.price)}</div>
                <div style={{ fontFamily: F.en, fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '18px' }}>잔여 {featured.stock}개</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ flex: 1, fontFamily: F.ko, fontSize: '12px', fontWeight: 500, color: '#060606', background: '#e8e4dc', border: 'none', padding: '12px', borderRadius: '2px', cursor: 'pointer' }}>구매하기</button>
                  <button style={{ fontFamily: F.ko, fontSize: '12px', color: 'rgba(232,228,220,0.5)', background: 'transparent', border: '0.5px solid rgba(232,228,220,0.15)', padding: '12px 16px', borderRadius: '2px', cursor: 'pointer' }}>저장</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Givan Video 섹션 */}
      {videoObjects.length > 0 && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
            <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a5a58' }}>Givan Video</span>
            <span style={{ fontFamily: F.en, fontSize: '8px', color: '#5a5a58' }}>영상 작업에서 파생된 제품</span>
          </div>
          <ProductGrid products={videoObjects} startIdx={1} />
        </>
      )}

      {/* 전체 제품 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 48px', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
        <span style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a5a58' }}>전체 제품</span>
      </div>
      <ProductGrid products={rest} startIdx={3} />

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

function ProductGrid({ products: prods, startIdx }: { products: typeof products; startIdx: number }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(232,228,220,0.08)', borderBottom: '0.5px solid rgba(232,228,220,0.08)' }}>
      {prods.map((p, i) => (
        <div key={p.id} style={{ background: '#060606', cursor: 'pointer' }}>
          <div style={{ aspectRatio: '3/4', background: p.isSoldOut ? '#0c0c0a' : GRADS[(startIdx + i) % GRADS.length] }} />
          <div style={{ padding: '12px 14px 16px' }}>
            <div style={{ fontFamily: F.en, fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5a58', marginBottom: '5px' }}>{p.category}</div>
            <div style={{ fontFamily: F.serif, fontSize: '15px', color: '#e8e4dc', lineHeight: 1.4, marginBottom: '6px' }}>{p.name}</div>
            <div style={{ fontFamily: F.en, fontSize: '13px', fontWeight: 500, color: p.isSoldOut ? '#5a5a58' : '#e8e4dc' }}>
              {p.isSoldOut ? 'Sold Out' : formatPrice(p.price)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
