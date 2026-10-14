import type { ConceptCard, SafetyTopic } from '../types';

// PART 1-3 기초 조작 개념
export const CONCEPTS: ConceptCard[] = [
  {
    id: 'rpm',
    title: 'RPM — 회전 속도',
    term: 'Revolutions Per Minute',
    summary: '비트가 1분 동안 몇 바퀴 도는지를 나타내는 숫자예요. 숫자가 클수록 빨리 돌아요.',
    points: [
      { text: '기기마다 낼 수 있는 최대 RPM이 달라요. 예를 들어 Medicool Pro Power 20K는 최대 20,000 RPM으로 나와 있어요.', sources: ['medicool-manual'] },
      {
        text: '알맞은 속도는 기기·비트·작업·숙련도에 따라 달라요. 모든 드릴에 맞는 "정답 숫자"는 없어요. 그래서 이 가이드는 특정 RPM을 권하지 않아요. 쓰는 기기와 비트 제조사의 안내를 따르세요.',
        sources: ['medicool-faq', 'thenailwiki-bits'],
      },
      { text: '빠르다고 좋은 게 아니에요. 속도가 빠르면 같은 시간에 더 많이 갈리고, 그만큼 조절하기 어려워져요.', sources: ['thenailwiki-bits'] },
    ],
  },
  {
    id: 'direction',
    title: '회전 방향 — 정회전 / 역회전',
    term: 'Forward / Reverse',
    summary: '정회전과 역회전은 비트가 도는 두 가지 방향이에요. 방향에 따라 비트가 손톱 위에서 끌려가는 쪽이 달라져요. 그래서 작업하는 방향과 맞아야 부드럽게 움직여요.',
    points: [
      { text: '보통 정회전은 오른손잡이가 오른쪽→왼쪽으로 작업할 때, 역회전은 왼손잡이가 왼쪽→오른쪽으로 작업할 때 쓴다고 설명해요.', sources: ['katiebarnes-direction'] },
      { text: '방향이 작업과 맞지 않으면 걸리는 느낌이 들거나, 비트가 튀거나 미끄러질 수 있어요.', sources: ['katiebarnes-direction', 'nailspiracy-materials'] },
      { text: '일부 카바이드 비트는 한쪽 방향으로 돌 때만 잘 깎이도록 날이 만들어져 있어요("방향성 비트"). 다이아몬드 비트는 대부분 양쪽 방향 모두 쓸 수 있어요.', sources: ['katiebarnes-direction', 'nailspiracy-handed'] },
    ],
  },
  {
    id: 'mounting',
    title: '비트 장착과 분리',
    term: 'Chuck · Shank',
    summary: '비트의 막대 부분(섕크)을 핸드피스 앞쪽 장착부(척)에 끝까지 넣고 잠가요. 잠그는 방법은 제품마다 달라요.',
    points: [
      { text: '항상 전원을 끄고, 비트가 완전히 멈춘 다음에 끼우고 빼세요.', sources: ['medicool-manual'] },
      { text: '예를 들어 Medicool Pro Power 20K는 척을 반시계 방향으로 돌려서 열고, 비트를 넣은 뒤 시계 방향으로 돌려 잠가요. 비트를 힘으로 밀어 넣지 마세요.', sources: ['medicool-manual'] },
      { text: '막대가 휘었거나 돌 때 흔들리는(중심이 안 맞는) 비트는 작업을 불안하게 만들고, 핸드피스도 망가뜨릴 수 있어요.', sources: ['staleks-expert'] },
    ],
  },
  {
    id: 'heat',
    title: '속도 · 압력 · 마찰열',
    term: 'Speed · Pressure · Friction heat',
    summary: '얼마나 갈리는지는 비트 종류, 입도, 속도, 누르는 힘이 함께 정해요. 갈리는 만큼 열(마찰열)도 생겨요.',
    points: [
      { text: '세게 누를수록, 한 곳에 오래 머물수록 열이 빨리 쌓여요. 제조사들은 공통적으로 "비트가 알아서 갈게" 가볍게 대고 자주 떼어 주라고 권해요.', sources: ['medicool-guide', 'nailspiracy-materials'] },
      { text: '홈이 막히거나 닳은 비트는 덜 갈리는데 열은 더 나요. 속도나 힘을 올려서 버티지 말고 비트를 바꾸세요.', sources: ['thenailwiki-bits'] },
      { text: '어떤 재질도 마찰열을 완전히 없애지는 못해요. "열이 안 나는 비트"라는 말은 과장일 수 있어요.', sources: ['nailspiracy-materials'] },
      { text: '뜨겁거나 따끔하면 바로 손톱에서 떼세요.', sources: ['medicool-guide'] },
    ],
  },
];

// PART 1-4 기본 안전 수칙
export const SAFETY: SafetyTopic[] = [
  {
    id: 'natural-nail',
    title: '자연손톱 손상 위험',
    level: 'caution',
    summary: '드릴은 주로 젤이나 인조네일 같은 제품층을 다룰 때 써요. 자연손톱은 생각보다 얇아요. 한 번 깎인 두께는 손톱이 자라서 새로 바뀔 때까지 돌아오지 않아요.',
    points: [
      { text: '제품을 깎아 내는 비트(카바이드·세라믹 같은 절삭형)를 자연손톱 표면에 쓰면 손톱이 상해요.', sources: ['thenailwiki-bits', 'nailspiracy-materials'] },
      { text: '고운 샌딩밴드도 자연손톱에 잘못 쓰면 손톱이 얇아질 수 있어요. 힘은 최소한으로만 써야 해요.', sources: ['thenailwiki-bits'] },
      { text: '젤을 지울 때는 "젤을 얇게 남기고 멈추는" 감각이 중요해요. 자연손톱이 드러날 때까지 갈지 않는 게 안전해요.', needsSource: true },
    ],
  },
  {
    id: 'cuticle',
    title: '큐티클과 피부 손상 위험',
    level: 'stop',
    summary: '큐티클은 손톱이 시작되는 곳에서 손톱 뿌리를 보호하는 조직이에요. 드릴로 큐티클이나 손톱 주변 피부를 다듬는 건 전문 교육이 필요한 숙련 작업이에요. 이 가이드는 초보자가 연습하는 걸 권하지 않아요.',
    points: [
      { text: '미국피부과학회(AAD)는 큐티클을 제거하지 말라고 권고해요. 큐티클이 손톱 뿌리를 보호하기 때문이에요.', sources: ['aad-healthy-nails', 'aad-nail-care'] },
      { text: '회전 방향이 맞지 않으면 비트가 피부 쪽으로 파고들어서, 손톱 뿌리 위를 덮은 피부(에포니키움)에 상처를 낼 수 있어요.', sources: ['thenailwiki-bits'] },
      { text: '깎아 내는 비트(카바이드·세라믹)는 피부에 직접 쓰지 않아요.', sources: ['thenailwiki-bits', 'nailspiracy-materials'] },
      { text: '"세이프티 비트"도 위험이 없다는 뜻은 아니에요. 윗면만 덜 위험하게 만들었을 뿐, 옆면은 그대로 갈아내요.', sources: ['kiarasky-guide'] },
    ],
  },
  {
    id: 'heat-pressure',
    title: '마찰열과 너무 센 압력',
    level: 'caution',
    summary: '열감은 손톱 아래 조직이 상하고 있다는 신호일 수 있어요. 세게 누르기보다 가볍게 여러 번 지나가는 게 원칙이에요.',
    points: [
      { text: '가볍게 대고, 자주 떼고, 한 곳에 머물지 않기.', sources: ['medicool-guide'] },
      { text: '닳거나 막힌 비트는 열이 더 나요. 속도나 힘을 올려서 버티지 말고 바꾸세요.', sources: ['thenailwiki-bits'] },
    ],
  },
  {
    id: 'dust',
    title: '가루(분진) 관리와 보호',
    level: 'caution',
    summary: '젤이나 인조네일을 갈면 아주 고운 가루가 날려요. 가루를 들이마시거나 눈에 들어가지 않도록 작업 환경부터 갖춰 주세요.',
    points: [
      { text: '창문을 열거나 환풍기를 켜서 환기하세요. 가능하면 작업하는 곳 가까이에서 가루를 빨아들이는 집진기를 쓰는 게 좋아요.', sources: ['osha-chemical'] },
      { text: 'OSHA(미국 산업안전보건청)는 네일숍 작업 대부분에서 환기와 작업 습관을 잘 지키면 노출을 최소한으로 줄일 수 있다고 설명해요. 호흡보호구는 가루 같은 입자를 막는 방법으로 소개해요. (네일숍 기준 자료)', sources: ['osha-chemical'] },
      { text: '집에서 쓸 마스크나 보안경을 어떤 기준으로 고를지는, 이 가이드가 확인한 공식 자료가 없어요.', needsSource: true },
    ],
  },
  {
    id: 'hygiene',
    title: '비트 위생과 관리',
    level: 'info',
    summary: '비트에는 각질과 가루가 잘 껴요. 다시 쓸 수 있는 비트와 한 번 쓰고 버리는 소모품을 나눠서 관리하세요.',
    points: [
      { text: '금속 비트(예: 카바이드): 쓰고 나면 작은 브러시와 비누, 따뜻한 물로 이물질을 닦아 내요. 그다음 소독제에 라벨에 적힌 시간만큼 담가요. 너무 오래 담그면 코팅이 상할 수 있어요.', sources: ['kiarasky-guide'] },
      { text: '샌딩밴드는 소독할 수 없어서 한 사람에게 한 번만 써요.', sources: ['kiarasky-guide'] },
      { text: '세라믹 비트는 쓰기 전에 금이 가거나 깨진 곳이 없는지 보고, 상한 비트는 쓰지 마세요.', sources: ['nailspiracy-materials'] },
      { text: '어떤 방법으로 씻고 소독할지는 비트 재질과 제조사 안내에 따라 달라요.', sources: ['nailspiracy-materials'] },
    ],
  },
  {
    id: 'do-not-use',
    title: '드릴을 쓰면 안 되는 상황',
    level: 'stop',
    summary: '아래 중 하나라도 해당하면 드릴을 쓰지 마세요.',
    points: [
      { text: '손톱 주변에 상처, 물집, 진물이 있거나 감염 증상이 눈에 보일 때', sources: ['osha-biological'] },
      { text: '손톱이 들뜨거나 갈라졌을 때, 통증·붓기·변색 같은 이상이 있을 때 — 피부과 진료를 먼저 받으세요.', needsSource: true },
      { text: '기기 코드나 플러그가 상했거나 제대로 작동하지 않을 때, 기기가 물에 젖었을 때, 욕실처럼 물이 가까운 곳일 때', sources: ['medicool-manual'] },
      { text: '비트가 휘었거나 깨졌을 때, 돌 때 흔들릴 때', sources: ['staleks-expert', 'nailspiracy-materials'] },
      { text: '작업 중 뜨겁거나 따끔할 때 — 바로 멈추세요', sources: ['medicool-guide'] },
    ],
  },
];
