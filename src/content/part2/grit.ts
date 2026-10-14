import type { Claim, GritLevel } from '../types';

// PART 2-C 입도(Grit). 시각화용 relative 값은 "상대적 거칠기" 개념도이며 실제 입자 크기가 아님.
export const GRITS: GritLevel[] = [
  { id: 'extra-fine', ko: '아주 고운', en: 'Extra Fine', meaning: '마지막 마무리나 아주 섬세한 작업에 써요.', relative: 0.1 },
  { id: 'fine', ko: '고운', en: 'Fine', meaning: '섬세한 작업이나 표면을 매끄럽게 할 때 써요.', relative: 0.3 },
  { id: 'medium', ko: '중간', en: 'Medium', meaning: '보통의 모양 다듬기와 정리에 써요.', relative: 0.55 },
  { id: 'coarse', ko: '거친', en: 'Coarse', meaning: '빠르게 많이 걷어낼 때 써요. 자연손톱과 피부에는 쓰지 않아요.', relative: 0.8 },
  { id: 'extra-coarse', ko: '아주 거친', en: 'Extra Coarse', meaning: '두꺼운 제품을 빠르게 걷어낼 때 써요.', relative: 1 },
];

export const GRIT_FACTS: { title: string; claims: Claim[] }[] = [
  {
    title: 'Fine · Medium · Coarse가 뜻하는 것',
    claims: [
      { text: '입도는 비트 표면이 얼마나 곱거나 거친지를 나타내요. 거칠수록 빨리 많이 갈리고, 고울수록 천천히 매끄럽게 갈려요.', sources: ['staleks-expert', 'thenailwiki-bits'] },
      { text: '대부분의 비트는 Coarse(거침) · Medium(중간) · Fine(고움) 세 단계로 나와요. 제품에 따라 Extra Fine, Extra Coarse가 더 있어요.', sources: ['kiarasky-guide', 'thenailwiki-bits'] },
      { text: '거친 입도는 제품을 많이 걷어낼 때 쓰고, 자연손톱이나 피부에는 쓰지 않아요.', sources: ['thenailwiki-bits'] },
    ],
  },
  {
    title: '연마형과 절삭형은 "입도"의 뜻이 달라요',
    claims: [
      { text: '연마형(다이아몬드, 샌딩밴드): 표면에 붙은 입자의 크기를 말해요. 사포가 얼마나 거친지와 같은 개념이에요.', sources: ['thenailwiki-bits', 'staleks-expert'] },
      { text: '절삭형(카바이드, 많은 세라믹): 입자가 없어요. 그래서 날(홈)의 크기·깊이·개수에 따라 깎이는 정도를 대략 입도라고 불러요.', sources: ['thenailwiki-bits'] },
      { text: '샌딩밴드는 180처럼 숫자로 표시하기도 해요. 사포 표기에서는 숫자가 클수록 고와요.', sources: ['medicool-guide'] },
      { text: '그래서 "카바이드 Fine"과 "다이아몬드 Fine"은 같은 거칠기가 아니에요. 기준이 서로 달라요.', sources: ['thenailwiki-bits'] },
    ],
  },
  {
    title: '색 링 표시',
    claims: [
      { text: '많은 제조사가 비트 막대에 색 링을 칠해서 입도를 표시해요. 작업하면서 빨리 구분하려는 표시예요.', sources: ['thenailwiki-bits', 'staleks-expert'] },
      { text: '하지만 어떤 색이 어떤 입도인지는 업계 표준이 아니라서 제조사마다 다를 수 있어요. 꼭 그 제조사의 입도표를 확인하세요.', sources: ['thenailwiki-bits'] },
      { text: '비트 몸체 색(코팅 색)이 입도를 늘 똑같이 나타내지 않는 경우도 있어요. 예를 들어 Kiara Sky 제품명을 보면 보라색이 Large Barrel에서는 Medium, Small Barrel에서는 Fine이에요.', sources: ['kiarasky-guide'] },
    ],
  },
];

// 제조사 실제 표기 예시 — 특정 제조사 1곳의 자료를 그대로 옮긴 것. 업계 표준 아님.
export const MAKER_COLOR_EXAMPLE = {
  maker: 'STALEKS PRO (다이아몬드 비트 EXPERT 라인)',
  source: 'staleks-expert',
  rows: [
    { color: '#c0392b', name: '빨강', grit: 'Fine', desc: '섬세한 피부·자연손톱 처리' },
    { color: '#2e5ea8', name: '파랑', grit: 'Medium', desc: '두꺼운 부분 정리, 큐티클 처리' },
    { color: '#2f7d4f', name: '초록', grit: 'Coarse', desc: '단단한 피부·손톱의 빠른 처리' },
  ],
};
