import type { Claim, MyMovement } from '../types';

// PART 3-2 회전 방향(비트가 도는 방향)과 이동 방향(손으로 비트를 옮기는 방향).
// 방향 표현은 모두 "드릴을 쓰는 사람이 손톱을 내려다보는 시점"으로 통일한다.
// 이동 방향은 개인 기억이며 검증되지 않았으므로 정적인 점선 화살표 + "추가 확인 필요"로만 표시한다.
// 좌표계: 손톱 도해 viewBox 0 0 360 360, 중심 (180,180). 위 = 드릴 쓰는 사람에게서 먼 쪽.

/** 방향을 말하는 기준 */
export const DIRECTION_BASIS: Claim[] = [
  { text: '책상 위 손톱을 내려다볼 때, 나한테서 먼 쪽이 "위", 가까운 쪽이 "아래"예요. "왼쪽"과 "오른쪽"은 내 왼손 쪽, 오른손 쪽이에요.' },
  { text: '셀프네일이라면 드릴을 쥔 내가 다른 손의 손톱을 내려다보는 시점이에요.' },
  { text: '마주 앉은 사람 눈에는 같은 움직임이 반대로 보여요. 내 오른쪽이 그 사람에게는 왼쪽이고, 내 "위"가 그 사람에게는 "아래"예요.' },
  { text: '손톱이 놓인 방향이 바뀌면, 같은 "위 → 아래"라도 손톱의 다른 부분을 지나가요.' },
];

/** 확인된 사실: 회전 방향의 정의 */
export const ROTATION_FACTS: Claim[] = [
  { text: '정회전(Forward, F)은 시계 방향, 역회전(Reverse, R)은 반시계 방향이라고 설명돼요.', sources: ['medicool-manual', 'thenailwiki-machine'] },
  { text: '회전은 비트가 스스로 도는 거예요. 손을 가만히 두어도 F든 R이든 계속 돌아요.', sources: ['thenailwiki-machine'] },
  { text: '같은 회전도 반대쪽(비트 끝 쪽)에서 보면 반대로 도는 것처럼 보여요. "어느 쪽에서 봤을 때 시계 방향인지"는 확인한 자료에 나와 있지 않아서, 위 그림은 핸드피스 뒤에서 비트 끝을 바라본다고 가정하고 그렸어요.', needsSource: true },
  { text: '스위치 표시(F/R, 화살표)와 위치는 제품마다 달라요. 쓰는 기기의 설명서를 확인하세요.', sources: ['medicool-manual'] },
];

/** 제가 배운 이동 방향 (개인 기억) */
export const MY_MOVEMENT: MyMovement = {
  origin: 'personal',
  rotation: 'F',
  summary: '저는 오른손잡이이고, 정회전(F)으로 돌리면서 비트를 위 → 아래, 오른쪽 → 왼쪽으로 옮겼던 걸로 기억해요. 여기서 방향은 모두 드릴을 쓰는 제 시점이에요.',
  note: { text: '기억이 정확하지 않은 개인 경험이에요. 모든 사람에게 맞는 정답이 아니고, 실제로 해 보기 전에 확인이 필요해요. 배울 때 손톱이 어느 방향으로 놓여 있었는지도 확인해야 해요.', needsSource: true },
  arrows: [
    { id: 1, from: [204, 104], to: [204, 236], label: '위 → 아래', oppositeLabel: '아래 → 위' },
    { id: 2, from: [262, 150], to: [98, 150], label: '오른쪽 → 왼쪽', oppositeLabel: '왼쪽 → 오른쪽' },
  ],
};

/** 실제 비트 움직임이 달라지는 이유 */
export const MOVEMENT_DEPENDS: { title: string; claims: Claim[] }[] = [
  {
    title: '회전과 이동은 따로 정해요',
    claims: [
      { text: '같은 F로 돌려도 손은 어느 쪽으로든 움직일 수 있어요. 자료들이 말하는 건 "어떤 회전일 때 어느 쪽으로 움직이면 비트가 부드럽게 나가는가"의 조합이에요.', sources: ['thenailwiki-machine', 'katiebarnes-direction'] },
    ],
  },
  {
    title: '비트가 닿는 면',
    claims: [
      { text: '돌고 있는 원통의 윗면과 아랫면은 서로 반대 방향으로 움직여요. 그래서 비트의 어느 면이 손톱에 닿느냐에 따라, 같은 회전이라도 손톱 위에서 끌리는 방향이 달라져요. (원리를 설명한 내용이에요)', needsSource: true },
    ],
  },
  {
    title: '비트 종류와 작업 부위',
    claims: [
      { text: '교육 자료는 정회전·역회전을 비트 종류와 작업 부위에 따라 고른다고 설명해요. 큐티클 작업에서는 손톱 곡선을 따라 방향을 바꾸기도 해요.', sources: ['thenailwiki-machine', 'katiebarnes-direction'] },
      { text: '일부 카바이드 비트는 한쪽 방향으로 더 잘 깎이도록 날이 만들어져 있어요(오른손용·왼손용). X자 날처럼 양쪽 방향 모두 쓰는 것도 있어요. 다이아몬드는 대부분 양방향이에요.', sources: ['katiebarnes-direction', 'nailspiracy-handed', 'kiarasky-guide'] },
    ],
  },
];

/** 자료 비교는 본문에서 줄이고 한 문단으로만 안내 (자세한 내용은 참고 자료) */
export const SOURCE_NOTE: Claim = {
  text: '제조사와 교육 자료마다 설명하는 이동 방향이 서로 다르고, 대부분 어느 시점에서 본 방향인지 밝히지 않아요. 그래서 이 가이드는 하나의 이동 방향을 정답으로 정하지 않았어요. 자료별 설명은 아래 참고 자료에서 볼 수 있어요.',
  sources: ['thenailwiki-machine', 'katiebarnes-direction', 'opi-efile-prep', 'youngnails-direction', 'attain-direction'],
};

/** 안전상 주의해야 하는 움직임 */
export const MOVEMENT_SAFETY: Claim[] = [
  { text: '방향의 기준을 맞추는 건 같은 말로 설명하기 위해서예요. 어떤 방향으로 움직이면 안전하다는 뜻이 아니에요.' },
  { text: '작업 방향과 회전이 맞지 않으면 가루와 재료가 피부 쪽으로 밀려 들어가서, 큐티클 주변 피부에 상처가 날 수 있어요.', sources: ['thenailwiki-machine'] },
  { text: '방향이 맞지 않으면 걸리는 느낌이 들거나, 비트가 튀고 미끄러질 수 있어요.', sources: ['katiebarnes-direction'] },
  { text: '비트를 한 자리에 멈춰 두지 마세요. 가볍게 대고 계속 움직이면서 짧게 여러 번 지나가요.', sources: ['thenailwiki-machine', 'opi-efile-prep'] },
];
