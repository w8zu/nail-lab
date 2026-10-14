import type { ConceptCard, DrillPart } from '../types';

// PART 1-1 네일드릴이란?
export const WHAT_IS: ConceptCard[] = [
  {
    id: 'definition',
    title: '무엇을 하는 도구인가요?',
    term: 'Nail Drill · E-file(전동 파일)',
    summary:
      '끝에 꽂은 작은 "비트"를 모터로 빠르게 돌려서 손톱 위를 갈아내는 전동 도구예요. 주로 젤이나 인조네일처럼 손톱 위에 올린 재료를 다루고, 손톱 표면을 다듬는 데도 써요. 이 가이드에서는 손톱 위에 올린 재료를 "제품층"이라고 부를게요.',
    points: [
      {
        text: '드릴은 비트를 돌려 주는 기계예요. 무엇을 얼마나 갈아낼지는 어떤 비트(재질·모양·입도)를 꽂느냐에 따라 달라져요.',
        sources: ['thenailwiki-bits'],
      },
      {
        text: '기계 하나에 비트만 바꿔 끼우면 젤 제거, 표면 다듬기, 광택 내기처럼 여러 작업을 할 수 있어요.',
        sources: ['medicool-guide'],
      },
    ],
  },
  {
    id: 'vs-file',
    title: '손 파일과 무엇이 다른가요?',
    term: 'Manual file vs E-file',
    summary:
      '손 파일은 내가 팔을 움직인 만큼만 갈려요. 드릴은 비트가 혼자 계속 돌아서, 같은 시간에 훨씬 많이 갈려요.',
    points: [
      { text: '좋은 점: 빠르고 일정하게 갈 수 있어요. 두꺼운 젤을 다룰 때 손이 덜 피곤해요.', sources: ['medicool-guide'] },
      {
        text: '조심할 점: 그만큼 실수도 빨리 커져요. 손 파일로는 여러 번 문질러야 생길 손상이 드릴로는 순식간에 생길 수 있어요.',
        sources: ['thenailwiki-bits'],
      },
      {
        text: '드릴이 손 파일을 완전히 대신하지는 않아요. 섬세한 마무리나 손톱 끝 정리는 손 파일이 더 다루기 쉬울 때가 많아요.',
        needsSource: true,
      },
    ],
  },
  {
    id: 'self-nail-uses',
    title: '셀프네일에서는 주로 어디에 쓰나요?',
    summary: '셀프네일에서는 주로 아래 작업에 써요. 이 가이드에서는 비트마다 어떤 작업용인지 나눠서 보여 드려요.',
    points: [
      {
        text: '젤 제거 돕기: 굳은 젤을 얇게 갈아내서 떼어 내기 쉽게 만들어요. 제품층에만 쓰고, 자연손톱(내 원래 손톱)까지 갈지 않아요.',
        sources: ['kiarasky-guide', 'thenailwiki-bits'],
      },
      { text: '젤·인조네일 표면 다듬기: 울퉁불퉁한 표면이나 두께를 고르게 정리해요.', sources: ['kiarasky-guide'] },
      { text: '광택·마무리: 광택용(폴리싱) 비트로 표면을 매끄럽게 해요.', sources: ['medicool-guide', 'thenailwiki-bits'] },
      {
        text: '큐티클·손톱 주변 관리: 전문 교육에서 배우는 숙련 작업이에요. 초보자가 영상만 보고 따라 하는 건 권하지 않아요. (PART 1 안전 수칙 참고)',
        sources: ['aad-healthy-nails', 'thenailwiki-bits'],
      },
    ],
  },
];

// PART 1-2 네일드릴의 구조 — 도해 핫스팟 (DrillDiagram 좌표계 기준, 부위 바로 옆에 배치)
export const DRILL_PARTS: DrillPart[] = [
  {
    id: 'controller',
    ko: '본체 · 컨트롤러',
    en: 'Control box / Power station',
    hotspot: { x: 54, y: 162 },
    role: '전원을 넣고, 속도와 회전 방향을 조절하는 받침 장치예요.',
    details: [
      { text: '책상 위에 두는 상자 모양이 많아요. 무선 제품은 이 안에 배터리가 들어 있기도 해요.', sources: ['medicool-guide', 'medicool-manual'] },
      { text: '펜처럼 생긴 일체형 제품은 따로 본체가 없고, 핸드피스에 버튼이 달려 있어요.', needsSource: true },
    ],
    sources: ['medicool-guide', 'medicool-manual'],
  },
  {
    id: 'speed',
    ko: '속도 조절 장치',
    en: 'Variable speed control',
    hotspot: { x: 92, y: 192 },
    role: '비트가 1분에 몇 번 도는지(RPM)를 바꾸는 다이얼이나 버튼이에요.',
    details: [
      { text: '예를 들어 Medicool Pro Power 20K는 다이얼을 시계 방향으로 돌리면 빨라지고, 반대로 돌리면 느려져요.', sources: ['medicool-manual'] },
      { text: '낮은 속도에서 시작해서, 필요한 만큼만 천천히 올리는 게 기본이에요.', sources: ['medicool-faq'] },
    ],
    sources: ['medicool-manual', 'medicool-faq'],
  },
  {
    id: 'direction',
    ko: '정회전 · 역회전 스위치',
    en: 'Forward / Reverse switch',
    hotspot: { x: 282, y: 214 },
    role: '비트가 도는 방향을 바꾸는 스위치예요. 정회전과 역회전은 비트가 도는 두 가지 방향을 말해요. 주로 쓰는 손(오른손·왼손)과 작업 방향에 맞춰 골라요.',
    details: [
      { text: '예를 들어 Medicool 설명서에서는 스위치를 올리면 시계 방향, 내리면 반시계 방향으로 돌아요. 표시 방법은 제품마다 달라요.', sources: ['medicool-manual'] },
      { text: '방향은 비트가 완전히 멈춘 뒤에 바꾸세요.', needsSource: true },
    ],
    sources: ['medicool-manual', 'katiebarnes-direction'],
  },
  {
    id: 'cord',
    ko: '연결 코드',
    en: 'Handpiece cord',
    hotspot: { x: 350, y: 330 },
    role: '본체와 핸드피스를 이어서 전원과 신호를 보내요.',
    details: [
      { text: '코드를 심하게 꺾거나 잡아당기지 마세요. 뽑을 때는 코드 말고 플러그를 잡으세요. 코드가 상한 기기는 쓰지 마세요.', sources: ['medicool-manual'] },
    ],
    sources: ['medicool-manual'],
  },
  {
    id: 'handpiece',
    ko: '핸드피스',
    en: 'Handpiece',
    hotspot: { x: 560, y: 172 },
    role: '손에 쥐는 펜 모양 부분이에요. 안에 모터가 있고, 앞쪽에서 비트를 물고 돌려요.',
    details: [
      { text: '무게와 진동에 따라 손이 얼마나 피곤한지, 얼마나 정확하게 움직일 수 있는지가 달라져요. 제조사들도 가벼운 핸드피스를 강조해요.', sources: ['medicool-guide'] },
      { text: '드릴을 쥔 손과 손톱을 받치는 손, 둘 다 흔들리지 않게 받쳐야 안전하게 다룰 수 있어요.', sources: ['medicool-manual'] },
    ],
    sources: ['medicool-guide', 'medicool-manual'],
  },
  {
    id: 'chuck',
    ko: '비트 장착부 (척)',
    en: 'Chuck / Collet',
    hotspot: { x: 704, y: 176 },
    role: '비트의 막대 부분(섕크)을 꽉 물어서 고정하는 곳이에요. 돌려서 여닫는 방식, 버튼을 누르는 방식 등이 있어요.',
    details: [
      { text: '네일 비트 막대 굵기는 3/32인치(약 2.35mm)가 업계 표준이에요. 내 기기와 비트의 굵기가 맞는지 확인하세요.', sources: ['medicool-guide', 'medicool-manual'] },
      { text: '비트는 꼭 전원을 끈 상태에서 끼우고 빼세요. 억지로 밀어 넣지 마세요.', sources: ['medicool-manual'] },
    ],
    sources: ['medicool-manual'],
  },
  {
    id: 'bit',
    ko: '비트',
    en: 'Bit',
    hotspot: { x: 790, y: 176 },
    role: '손톱이나 제품에 실제로 닿는 부분이에요. 재질·모양·입도에 따라 하는 일이 완전히 달라져요.',
    details: [
      { text: '비트는 손톱에 닿는 "머리"와 기계에 끼우는 "막대(섕크)"로 나뉘어요. 막대에는 입도(표면이 얼마나 곱거나 거친지)를 알려 주는 색 링이 칠해진 경우가 많아요.', sources: ['thenailwiki-bits'] },
      { text: '자세한 내용은 PART 2 비트 도감에서 볼 수 있어요.' },
    ],
    sources: ['thenailwiki-bits'],
  },
  {
    id: 'pedal',
    ko: '풋 페달 (선택)',
    en: 'Foot pedal (optional)',
    hotspot: { x: 492, y: 390 },
    role: '일부 제품에만 있는 부속이에요. 발로 켜고 끄거나 속도를 조절해요.',
    details: [{ text: '손을 쓰지 않고 속도나 방향을 바꿀 수 있어요. 없는 제품도 많아요.', sources: ['medicool-guide'] }],
    sources: ['medicool-guide'],
  },
];

export interface DrillVariant {
  id: string;
  name: string;
  desc: string;
  needsSource?: boolean;
}

// 제품별 구조 차이
export const DRILL_VARIANTS: DrillVariant[] = [
  {
    id: 'desktop',
    name: '분리형 (본체 + 핸드피스)',
    desc: '책상 위 본체에서 속도와 방향을 조절하고, 코드로 연결된 핸드피스를 쥐고 써요. 네일숍용 기기에 흔한 구조예요.',
  },
  {
    id: 'portable',
    name: '휴대형 (배터리 본체)',
    desc: '작은 배터리 본체를 손목이나 허리, 책상에 두고 핸드피스를 연결해요. 전원선 없이 쓸 수 있지만, 구조는 분리형과 비슷해요.',
  },
  {
    id: 'pen',
    name: '일체형 (펜형)',
    desc: '모터와 버튼이 모두 핸드피스 안에 들어 있어요. 가볍고 간편하지만, 힘·진동·열이 나는 정도는 제품마다 달라요.',
    needsSource: true,
  },
];
