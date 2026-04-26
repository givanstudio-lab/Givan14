// ─────────────────────────────────────────────────────
// Givan Studio — 콘텐츠 데이터
// 이 파일만 수정하면 전체 사이트에 반영됩니다.
// ─────────────────────────────────────────────────────

export const videos = [
  {
    id: 'v1',
    title: '감각의 온도 — Brand X',
    category: 'Brand Film',
    vimeoUrl: 'https://vimeo.com/000000001',
    year: 2026,
    desc: '브랜드의 계절감을 영상의 온도로 번역한 작업.',
    featured: true,
    client: 'Brand X',
  },
  {
    id: 'v2',
    title: 'Givan Live Vol.2 — Record',
    category: 'Live Record',
    vimeoUrl: '',
    year: 2026,
    desc: '',
    featured: false,
    client: '',
  },
  {
    id: 'v3',
    title: '어떤 빛의 상태',
    category: 'Short Film',
    vimeoUrl: '',
    year: 2025,
    desc: '빛이 공간을 통과하는 순간의 기록.',
    featured: false,
    client: '',
  },
  {
    id: 'v4',
    title: '정지된 것들의 움직임',
    category: 'Exhibition',
    vimeoUrl: '',
    year: 2025,
    desc: '',
    featured: false,
    client: '',
  },
]

export const products = [
  {
    id: 'p1',
    name: '어떤 빛의 온도',
    category: 'Sensory Object',
    price: 68000,
    stock: 7,
    isFeatured: true,
    isSoldOut: false,
    desc: '전시 《정지된 것들의 움직임》에서 출발한 오브젝트. 빛의 방향이 공간의 감정을 바꾸는 순간을 물성으로 번역했다.',
    linkedWork: '정지된 것들의 움직임',
  },
  {
    id: 'p2',
    name: '소리의 형태',
    category: 'Video Object',
    price: 45000,
    stock: 12,
    isFeatured: false,
    isSoldOut: false,
    desc: '',
    linkedWork: '',
  },
  {
    id: 'p3',
    name: '정지된 것들의 움직임 — Zine',
    category: 'Archive',
    price: 24000,
    stock: 20,
    isFeatured: false,
    isSoldOut: false,
    desc: '',
    linkedWork: '',
  },
  {
    id: 'p4',
    name: '침묵의 밀도',
    category: 'Artist Edition',
    price: 38000,
    stock: 8,
    isFeatured: false,
    isSoldOut: false,
    desc: '',
    linkedWork: '',
  },
  {
    id: 'p5',
    name: '빛과 그림자의 경계',
    category: 'Sensory Object',
    price: 52000,
    stock: 5,
    isFeatured: false,
    isSoldOut: false,
    desc: '',
    linkedWork: '',
  },
  {
    id: 'p6',
    name: 'Givan Live Vol.1 Zine',
    category: 'Archive',
    price: 22000,
    stock: 0,
    isFeatured: false,
    isSoldOut: true,
    desc: '',
    linkedWork: '',
  },
]

export const liveShows = [
  {
    id: 'live3',
    vol: 3,
    title: '어떤 밤의 밀도',
    date: '2026-05-17T20:00:00+09:00',
    venue: '서울 · 미공개 장소',
    desc: '세 번째 라이브. 전자음악과 필드 레코딩, 실시간 영상이 하나의 공간 안에서 교차한다.',
    setlist: [
      { artist: '우형준', role: 'Live Electronic Set', duration: '40min' },
      { artist: 'Artist B', role: 'Video Performance', duration: '20min' },
      { artist: 'All', role: 'Collaborative Improvisation', duration: '미정' },
    ],
    ticketUrl: '',
    soldPercent: 74,
    isUpcoming: true,
  },
  {
    id: 'live2',
    vol: 2,
    title: '정지된 것들의 움직임',
    date: '2026-02-08T20:00:00+09:00',
    venue: '서울',
    desc: '',
    setlist: [],
    ticketUrl: '',
    soldPercent: 100,
    isUpcoming: false,
  },
  {
    id: 'live1',
    vol: 1,
    title: '어떤 빛의 온도',
    date: '2025-11-22T20:00:00+09:00',
    venue: '서울',
    desc: '',
    setlist: [],
    ticketUrl: '',
    soldPercent: 100,
    isUpcoming: false,
  },
]

export const exhibitions = [
  {
    id: 'exh3',
    title: '빛이 공간을 기억하는 방식',
    type: 'Group',
    startDate: '2026-04-01',
    endDate: '2026-05-31',
    venue: '서울',
    desc: '빛의 방향, 속도, 온도가 공간의 감정을 어떻게 바꾸는지를 탐구한다.',
    works: [
      { workTitle: '빛의 방향', artist: '우형준', medium: 'Sound Installation' },
      { workTitle: '잔상', artist: 'Artist B', medium: 'Video Loop' },
      { workTitle: '온도 오브젝트', artist: 'Givan Studio', medium: 'Object Series' },
    ],
    isCurrent: true,
    vol: 3,
  },
  {
    id: 'exh2',
    title: '정지된 것들의 움직임',
    type: 'Solo',
    startDate: '2026-01-10',
    endDate: '2026-02-20',
    venue: '서울',
    desc: '',
    works: [],
    isCurrent: false,
    vol: 2,
  },
  {
    id: 'exh1',
    title: '어떤 빛의 온도',
    type: 'Group',
    startDate: '2025-10-15',
    endDate: '2025-11-30',
    venue: '서울',
    desc: '',
    works: [],
    isCurrent: false,
    vol: 1,
  },
]

export const fundingProjects = [
  {
    id: 'fund3',
    vol: 3,
    title: '어떤 밤의 밀도 — Givan Live Vol.3',
    desc: '세 번째 라이브. 전자음악과 필드 레코딩, 실시간 영상이 교차한다.',
    goal: 3000000,
    current: 2220000,
    deadline: '2026-05-05',
    isOpen: true,
    tiers: [
      { name: 'General 입장', price: 25000, stock: 40, remaining: 18 },
      { name: 'Early Access + Zine', price: 42000, stock: 20, remaining: 6 },
      { name: 'After Talk 포함', price: 58000, stock: 10, remaining: 2 },
    ],
  },
  {
    id: 'fund2',
    vol: 2,
    title: '정지된 것들의 움직임 — Givan Live Vol.2',
    desc: '',
    goal: 2000000,
    current: 2000000,
    deadline: '2026-01-20',
    isOpen: false,
    tiers: [],
  },
]

export const artists = [
  {
    id: 'a1',
    name: '우형준',
    type: 'Givan Sound',
    genre: 'Electronic · Ambient · Field Recording',
    bio: 'Givan Studio의 감각적 뿌리. 전자음악, 앰비언트, 필드 레코딩을 기반으로 공간과 시간의 상태를 소리로 번역한다.',
    works: [
      { workTitle: '어떤 빛의 온도 — Sound Direction', role: 'Sound Direction', year: 2026 },
      { workTitle: 'Givan Live Vol.2 — Live Performance', role: 'Live Performance', year: 2026 },
      { workTitle: '정지된 것들의 움직임 — Score', role: 'Score', year: 2025 },
    ],
    tags: ['Live', 'Score', 'Field Recording'],
    isFeatured: true,
  },
  {
    id: 'a2',
    name: 'Artist B',
    type: 'Givan Video',
    genre: 'Experimental Film · VJing',
    bio: '',
    works: [
      { workTitle: '빛이 공간을 기억하는 방식 — Video Loop', role: 'Video', year: 2026 },
    ],
    tags: ['Video', 'Exhibition'],
    isFeatured: false,
  },
]

// 유틸 함수
export const getUpcomingShow = () => liveShows.find(s => s.isUpcoming) ?? liveShows[0]
export const getCurrentExhibition = () => exhibitions.find(e => e.isCurrent)
export const getOpenFunding = () => fundingProjects.filter(f => f.isOpen)
export const getFeaturedProduct = () => products.find(p => p.isFeatured)
export const getFundingPercent = (proj: { current: number; goal: number }) =>
  Math.round((proj.current / proj.goal) * 100)
export const getDday = (dateStr: string) => {
  const diff = new Date(dateStr).getTime() - Date.now()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return days > 0 ? `D-${days}` : days === 0 ? 'D-Day' : '종료'
}
export const formatPrice = (price: number) =>
  `₩ ${price.toLocaleString('ko-KR')}`
