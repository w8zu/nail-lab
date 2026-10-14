import type { Claim, Workflow } from '../types';

// PART 3 — 내가 사용하는 비트와 작업 방식
// personal(나의 방식) 과 research(조사한 정보)를 데이터 단계에서 분리한다.
// 개인 기록의 수치(RPM 등)는 경험 기록이며, 화면에서 반드시 "권장값 아님"으로 표시한다.

export const PART3_NOTICE =
  '이 가이드는 제가 다니던 네일숍에서 배운 방식과 제가 쓰는 도구를 바탕으로 썼어요. 모든 네일드릴과 비트에 똑같이 통하는 표준 사용법은 아니에요. 제품별 제조사 안내와 안전 수칙을 먼저 따라 주세요.';

export const WORKFLOWS: Workflow[] = [
  {
    id: 'gel',
    title: '젤네일 제거',
    summary: '비트 두 개로 젤을 걷어내고 표면을 정리해요.',
    steps: [
      {
        id: 'gel-bullet',
        order: 1,
        shapeId: 'bullet',
        tool: '총알 모양 비트',
        setting: '약 20,000~30,000 RPM',
        purpose: '저는 비트의 넓은 옆면은 젤이 넓게 덮인 부분에, 앞쪽의 좁은 끝은 구석을 정리할 때 써요.',
        unverified: ['정확한 제품 모델과 공식 이름 (사진으로 확인 필요)', '재질과 입도'],
        research: [
          {
            text: '"총알 비트"는 생김새를 보고 붙인 이름이에요. 자료에서는 원통에 끝이 둥근 불릿(Bullet/Rounded Barrel), 끝이 덜 뾰족한 원뿔인 라운드 콘(Rounded Cone), 타원형인 풋볼(Football)을 서로 다른 모양으로 설명해요.',
            sources: ['thenailwiki-bits', 'efilebits-guide', 'nailsmag-bits'],
          },
          {
            text: '기기에 표시된 RPM은 비트에 아무것도 닿지 않은 상태에서 도는 횟수예요. 같은 숫자라도 기기의 힘(토크)에 따라 실제 작업 느낌이 달라요.',
            sources: ['thenailwiki-machine'],
          },
          {
            text: '교육 자료도 작업별 속도는 "정해진 규칙이 아니라 출발점"이라고 해요. 낮게 시작해서 필요할 때만 올리라고 안내해요.',
            sources: ['thenailwiki-machine'],
          },
        ],
      },
      {
        id: 'gel-safety',
        order: 2,
        shapeId: 'safety-barrel',
        tool: '세이프티 배럴 비트',
        setting: '약 5,000 RPM',
        purpose: '저는 젤을 걷어낸 뒤 이 비트로 표면을 평평하게 다듬어요. 울퉁불퉁한 표면을 고르게 만드는 이 작업을 평탄화라고 해요.',
        unverified: ['입도 — 고운(Fine) 입도로 기억하지만 제품 표기를 확인해야 해요', '재질'],
        research: [
          {
            text: '입도는 두 가지 방식으로 표시해요. 비트는 주로 Fine·Medium·Coarse 같은 단계 이름을 쓰고, 샌딩밴드나 손 파일은 180·240 같은 숫자를 써요(숫자가 클수록 고와요). 한 제조사 문서 안에 두 표기가 같이 나오기도 해요.',
            sources: ['opi-efile-prep', 'medicool-guide', 'thenailwiki-bits'],
          },
          {
            text: '숫자와 Fine/Medium/Coarse를 짝지어 놓은 공식 대응표는 찾지 못했어요. 판매처마다 대응이 달라서, "고운 입도"가 몇 번인지는 가지고 있는 비트의 제조사 표기로 확인해야 해요.',
            needsSource: true,
          },
          {
            text: '카바이드처럼 깎아 내는 비트의 "입도"는 입자 크기가 아니라 날의 크기·깊이를 대략 가리키는 말이에요.',
            sources: ['thenailwiki-bits'],
          },
        ],
      },
    ],
  },
  {
    id: 'cuticle',
    title: '큐티클 케어',
    summary: '네일숍에서 배운 흐름을 적어 둔 기록이에요. 따라 하라는 안내가 아니에요.',
    steps: [
      {
        id: 'cut-flame',
        order: 1,
        shapeId: 'flame',
        tool: '플레임 비트',
        setting: '드릴의 가장 낮은 속도 단계',
        purpose: '저는 큐티클 포켓을 열어 줄 때 이 비트를 써요. 큐티클 포켓은 손톱 뿌리 쪽 피부와 손톱 사이의 좁은 틈을 말해요.',
        unverified: ['재질·입도·크기'],
        research: [
          { text: '플레임 비트는 큐티클 부위 정리 같은 세밀한 전문가 작업용으로 설명돼요.', sources: ['staleks-expert', 'efilebits-guide'] },
          { text: '전문가용 제조사 가이드도 큐티클 부위는 낮은 속도에서 시작한다고 해요.', sources: ['opi-efile-prep'] },
        ],
      },
      {
        id: 'cut-taper',
        order: 2,
        shapeId: 'tapered-barrel',
        tool: '작은 테이퍼드 배럴 비트 (아주 고운 입도)',
        setting: '드릴의 가장 낮은 속도 단계',
        purpose: '저는 남은 루즈스킨을 정리하고 큐티클 벽을 세울 때 이 비트를 써요. 루즈스킨은 손톱 표면에 얇게 붙어 있는 죽은 각질이고, 큐티클 벽은 다음 단계에서 니퍼로 잘라 내는 부분이에요.',
        unverified: ['재질 — PART 2의 테이퍼드 배럴은 주로 카바이드 제품층용으로 확인돼서, 피부 주변에 쓰는 비트와 같은 제품인지 확인해야 해요', '정확한 입도 표기'],
        research: [
          { text: '깎아 내는 비트(카바이드·세라믹)는 피부에 직접 쓰지 않아요. 피부 주변 작업에는 주로 다이아몬드를 써요.', sources: ['thenailwiki-bits'] },
        ],
      },
      {
        id: 'cut-nipper',
        order: 3,
        tool: '큐티클 니퍼',
        purpose: '저는 앞에서 세운 큐티클 벽을 니퍼로 잘라 내요.',
        unverified: [],
        research: [
          { text: '전문가용 제조사 가이드에서도 니퍼는 "느슨한 죽은 피부"를 정리할 때만 언급돼요.', sources: ['opi-efile-prep'] },
          { text: '큐티클은 손톱 뿌리를 보호하고 감염을 막는 장벽이에요. 미국피부과학회는 큐티클을 제거하지 말라고 권고해요.', sources: ['aad-healthy-nails', 'pmc-russian-manicure'] },
        ],
      },
    ],
  },
];

// 큐티클 기록 위에 항상 노출하는 안전 안내 (조사한 정보)
export const CUTICLE_WARNINGS: Claim[] = [
  { text: '큐티클을 건드리는 건 조갑주위염(손톱 주위 피부가 붓고 곪는 감염)의 잘 알려진 위험 요인이에요.', sources: ['pmc-russian-manicure'] },
  { text: '세균은 큐티클과 손톱 주변 피부에 생긴 작은 상처로 들어가요.', sources: ['cleveland-paronychia'] },
  { text: '살아 있는 큐티클과 떼어 내도 되는 각질을 정확히 구분할 수 없다면, 자르거나 갈아내지 마세요.', sources: ['aad-healthy-nails', 'opi-efile-prep'] },
  { text: '드릴로 하는 큐티클 작업은 직접 실습하면서 배우는 교육이 필요해요. 교육 자료도 영상을 보는 것만으로는 대신할 수 없다고 강조해요.', sources: ['thenailwiki-machine'] },
];

// 젤 제거 시 내가 가장 중요하게 생각하는 원칙 + 조사로 확인한 관련 정보
export const GEL_PRINCIPLES: { personal: string; research?: Claim }[] = [
  { personal: '비트를 손톱에 꾹 누르지 않아요.', research: { text: '누르면 마찰과 열이 늘고, 필요 이상으로 많이 갈려요. 핸드피스 무게 정도의 힘이면 충분하다고 해요.', sources: ['thenailwiki-machine'] } },
  { personal: '한곳에 오래 머무르지 않아요.', research: { text: '한 자리에 머물면 열과 갈리는 힘이 한 점에 몰려요. 그러면 홈이 파이거나, 손톱이 얇아지거나, 화상을 입을 수 있어요.', sources: ['thenailwiki-machine'] } },
  { personal: '마찰열과 손톱 손상에 늘 주의해요.', research: { text: '열감이 느껴지면 바로 떼고 식힌 다음, 속도·힘·비트 상태를 점검해요.', sources: ['thenailwiki-machine'] } },
  { personal: '베이스젤을 무조건 끝까지 갈아내려고 하지 않아요.', research: { text: '제품 제거용 비트가 자연손톱 표면에 닿으면 손톱이 상해요.', sources: ['thenailwiki-bits'] } },
  { personal: '자연손톱과 인조네일 재료의 경계를 신중하게 판단해요.', research: { text: '깎아 내는 비트는 자연손톱에 쓰지 않아요. 깎인 손톱은 자라서 새로 바뀔 때까지 돌아오지 않아요.', sources: ['thenailwiki-bits'] } },
  { personal: '손에 힘을 충분히 빼고 작업해요. 제가 배운 방식의 핵심이에요.', research: { text: '교육 자료도 연필을 쥐듯 가볍고 편하게 잡으라고 해요.', sources: ['thenailwiki-machine', 'opi-efile-prep'] } },
];

export const GEL_SAFETY: Claim[] = [
  { text: '위 원칙이나 특정 RPM만 지킨다고 안전한 건 아니에요. 기기, 비트, 젤 제품, 젤 상태에 따라 지우는 방법이 달라질 수 있어요.', sources: ['thenailwiki-machine'] },
  { text: '아프거나 뜨거운 느낌이 들면 바로 멈추세요.', sources: ['thenailwiki-machine'] },
];
