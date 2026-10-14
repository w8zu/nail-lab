import type { Material, Target } from '../types';

// PART 2-A 재질별 분류
export const MATERIALS: Material[] = [
  {
    id: 'diamond',
    ko: '다이아몬드',
    en: 'Diamond',
    action: ['abrasive'],
    summary: '금속 몸체 겉에 아주 작은 다이아몬드 입자를 입힌 비트예요. 사포처럼 문질러서 갈아내요(연마).',
    features: [
      { text: '공업용 다이아몬드 입자를 금속 몸체에 붙이거나 녹여 붙이거나(소결) 뿌려서 입혀요.', sources: ['staleks-expert', 'thenailwiki-bits'] },
      { text: '입자가 고르게 붙어 있어야 돌 때 덜 흔들리고, 갈린 면도 깔끔해요.', sources: ['staleks-expert'] },
    ],
    uses: [
      { text: '손톱 주변 피부나 큐티클 부위 작업에 가장 많이 쓰는 재질이에요. (전문가 작업 영역)', sources: ['thenailwiki-bits', 'staleks-expert'] },
      { text: '자연손톱이나 제품 표면을 세밀하게 다듬을 때 써요.', sources: ['staleks-expert'] },
    ],
    pros: [
      { text: '모양, 크기, 입도 종류가 아주 다양해요.', sources: ['staleks-expert'] },
      { text: '대부분 정회전·역회전 어느 쪽으로도 쓸 수 있어요.', sources: ['katiebarnes-direction'] },
      { text: '제조사에 따라 소독·멸균할 수 있다고 안내해요.', sources: ['staleks-expert'] },
    ],
    limits: [
      { text: '날로 깎는 방식이 아니라서, 두꺼운 젤을 한꺼번에 걷어내기엔 느리고 열이 날 수 있어요.', sources: ['thenailwiki-bits'] },
      { text: '쓰다 보면 입자가 닳거나 이물질이 껴서 잘 안 갈려요. 코팅이 상하지 않게 씻어야 해요.', sources: ['nailspiracy-materials'] },
    ],
    beginnerCautions: [
      { text: '"다이아몬드는 피부용"이라는 말 때문에 피부에 써도 안전하다고 오해하기 쉬워요. 피부 작업은 숙련이 필요해서 초보자에게 권하지 않아요.', sources: ['aad-healthy-nails'] },
    ],
    sources: ['staleks-expert', 'thenailwiki-bits', 'nailspiracy-materials', 'katiebarnes-direction'],
  },
  {
    id: 'ceramic',
    ko: '세라믹',
    en: 'Ceramic',
    action: ['cutting', 'abrasive'],
    summary: '세라믹으로 만든 비트예요. 주로 젤이나 인조네일처럼 단단한 제품층을 걷어낼 때 써요.',
    features: [
      { text: '제품마다 작동 방식 설명이 달라요. 홈(플루트)이 파여 있어 깎아 내는 방식(절삭형)이 많다는 자료도 있고, 입자를 입혀 갈아내는 방식(연마형)으로 설명하는 자료도 있어요.', sources: ['nailspiracy-materials', 'thenailwiki-bits'] },
      { text: '카바이드보다 열이 덜 난다고 홍보하는 경우가 많아요. 하지만 열이 "안 나는" 건 아니에요.', sources: ['thenailwiki-bits', 'nailspiracy-materials'] },
    ],
    uses: [{ text: '젤·하드젤·아크릴 같은 제품층을 걷어내고 모양을 정리해요.', sources: ['thenailwiki-bits', 'medicool-guide'] }],
    pros: [{ text: '열 관리가 중요한 작업에서 많이 골라요.', sources: ['thenailwiki-bits'] }],
    limits: [
      { text: '부딪히면 금이 가거나 이가 나갈 수 있어서, 쓸 때마다 살펴봐야 해요.', sources: ['nailspiracy-materials'] },
    ],
    beginnerCautions: [
      { text: '자연손톱 표면이나 피부에 직접 쓰지 않아요.', sources: ['thenailwiki-bits'] },
      { text: '금이 가거나 깨진 곳이 보이면 바로 쓰지 마세요.', sources: ['nailspiracy-materials'] },
    ],
    sources: ['thenailwiki-bits', 'nailspiracy-materials', 'medicool-guide'],
  },
  {
    id: 'carbide',
    ko: '카바이드 (텅스텐 카바이드)',
    en: 'Tungsten Carbide',
    action: ['cutting'],
    summary: '아주 단단한 금속 화합물(텅스텐 카바이드)을 깎아 만든 비트예요. 표면에 파인 날 홈(플루트)이 제품을 깎아내요(절삭).',
    features: [
      { text: '정밀하게 파낸 홈이 칼날 역할을 해서, 제품을 가루가 아니라 작은 조각으로 깎아내요.', sources: ['thenailwiki-bits'] },
      { text: '날 모양에 따라 한쪽 방향으로만 잘 깎이는 "방향성" 비트와, X자 날(크로스컷)처럼 양쪽 방향 모두 쓰는 비트가 있어요.', sources: ['kiarasky-guide', 'katiebarnes-direction'] },
    ],
    uses: [{ text: '아크릴·젤·딥파우더 같은 제품을 걷어내고, 길이와 모양, 표면을 정리해요.', sources: ['kiarasky-guide'] }],
    pros: [
      { text: '튼튼해서 오래 써요.', sources: ['kiarasky-guide'] },
      { text: '단단한 제품도 잘 걷어내요.', sources: ['thenailwiki-bits'] },
    ],
    limits: [
      { text: '홈에 가루가 막히면 잘 안 깎이고 열이 더 나요. 홈 안쪽까지 깨끗이 씻어야 해요.', sources: ['thenailwiki-bits', 'nailspiracy-materials'] },
      { text: '회전 방향이나 각도가 맞지 않으면 덜덜 떨리거나(채터링) 걸리는 느낌이 나요.', sources: ['nailspiracy-materials'] },
    ],
    beginnerCautions: [
      { text: '자연손톱과 피부에는 절대 직접 쓰지 마세요. 되돌릴 수 없는 손상이 생길 수 있어요.', sources: ['thenailwiki-bits'] },
      { text: '방향성 비트라면 정회전·역회전 설정이 비트와 맞는지 확인하세요.', sources: ['katiebarnes-direction'] },
    ],
    sources: ['thenailwiki-bits', 'kiarasky-guide', 'nailspiracy-materials', 'katiebarnes-direction'],
  },
  {
    id: 'sanding-band',
    ko: '샌딩밴드 + 만드렐',
    en: 'Sanding band & Mandrel',
    action: ['abrasive'],
    summary: '만드렐은 고무나 금속으로 된 막대예요. 그 위에 원통 모양 사포 띠(샌딩밴드)를 끼워 쓰고, 밴드만 갈아 끼워요.',
    features: [
      { text: '만드렐(막대)은 다시 쓰고, 샌딩밴드는 쓰고 버리는 소모품이에요.', sources: ['kiarasky-guide'] },
      { text: '밴드는 거친 것부터 고운 것까지 있어요. 180처럼 숫자로 표시한 제품도 있어요.', sources: ['medicool-guide', 'thenailwiki-bits'] },
    ],
    uses: [
      { text: '거친 밴드는 제품을 많이 걷어낼 때, 중간 밴드는 표면을 정리할 때, 고운 밴드는 자연손톱 표면을 조심스럽게 준비할 때 써요.', sources: ['thenailwiki-bits'] },
      { text: '제품 표면을 다듬을 때도 써요.', sources: ['kiarasky-guide'] },
    ],
    pros: [
      { text: '저렴하고 매번 새 밴드를 쓰니까 위생 관리가 간단해요.', sources: ['medicool-guide', 'kiarasky-guide'] },
    ],
    limits: [
      { text: '소독할 수 없어서 한 사람에게 한 번만 써야 해요.', sources: ['kiarasky-guide'] },
      { text: '금방 닳아서 쓰는 동안 갈리는 정도가 달라져요.', needsSource: true },
    ],
    beginnerCautions: [
      { text: '자연손톱에 쓸 때는 반드시 아주 가볍게 대야 해요. 잘못 쓰면 손톱이 얇아져요.', sources: ['thenailwiki-bits'] },
      { text: '밴드 끝 모서리가 피부나 큐티클 쪽에 닿지 않게 하세요.', needsSource: true },
    ],
    sources: ['kiarasky-guide', 'thenailwiki-bits', 'medicool-guide'],
  },
  {
    id: 'silicone',
    ko: '실리콘 · 러버 계열',
    en: 'Silicone / Rubber polisher',
    action: ['polishing'],
    summary: '말랑한 실리콘이나 고무로 된 비트예요. 많이 갈아내기보다 표면을 매끄럽게 하거나 광택을 내는 마무리용이에요.',
    features: [
      { text: '깎아내기보다 문질러서 다듬어요(버핑·폴리싱).', sources: ['thenailwiki-bits'] },
      { text: '연마 입자가 섞인 것, 섞이지 않은 것 등 종류가 다양해요. 구성은 제조사마다 달라요.', needsSource: true },
    ],
    uses: [
      { text: '전문 매니큐어에서는 손톱 주변 피부를 매끄럽게 마무리할 때 써요.', sources: ['thenailwiki-bits'] },
      { text: '표면에 광택을 낼 때(버핑) 써요.', sources: ['medicool-guide'] },
    ],
    pros: [{ text: '갈아내는 힘이 약해서 마무리 단계에 잘 맞아요.', sources: ['thenailwiki-bits'] }],
    limits: [
      { text: '쓰면서 닳고 모양이 변해요.', needsSource: true },
      { text: '소독할 수 있는지, 어떻게 하는지는 제품마다 달라요. 제조사 안내를 확인하세요.', needsSource: true },
    ],
    beginnerCautions: [
      { text: '부드러워 보여도 돌면서 열이 나요. 한 곳에 오래 대지 마세요.', sources: ['nailspiracy-materials'] },
    ],
    sources: ['thenailwiki-bits', 'medicool-guide'],
  },
];

export const MATERIAL_MAP = Object.fromEntries(MATERIALS.map((m) => [m.id, m])) as Record<Material['id'], Material>;

// 작업 대상 — 자연손톱과 인조네일(제품층)을 명확히 구분
export const TARGETS: Target[] = [
  { id: 'enhancement', ko: '인조네일·젤 제품층', desc: '젤네일, 하드젤, 아크릴, 딥파우더처럼 손톱 위에 올린 제품' },
  { id: 'natural-surface', ko: '자연손톱 표면', desc: '내 원래 손톱. 얇고, 깎인 두께는 자라서 새로 바뀔 때까지 돌아오지 않아요' },
  { id: 'nail-fold', ko: '손톱 주변·큐티클 부위', desc: '큐티클과 손톱 옆 피부. 전문 교육이 필요한 영역이에요' },
  { id: 'under-free-edge', ko: '손톱 끝 아래', desc: '손톱 끝(프리엣지) 밑면과 그 주변' },
  { id: 'finishing', ko: '마무리·광택', desc: '표면을 매끄럽게 하거나 광택을 내는 단계' },
];

export const TARGET_MAP = Object.fromEntries(TARGETS.map((t) => [t.id, t])) as Record<Target['id'], Target>;

export const ACTION_LABEL = {
  abrasive: '연마형 (입자로 갈아냄)',
  cutting: '절삭형 (날로 깎아냄)',
  polishing: '폴리싱 (문질러 다듬음)',
} as const;
