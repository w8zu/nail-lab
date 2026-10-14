import type { ImageAsset } from './types';
import { SHAPES } from './part2/shapes';

// 이미지 자산 레지스트리.
// 이번 버전은 외부 제품 사진을 사용하지 않습니다. 조사한 제조사 페이지의 사진은 재배포 허가(라이선스)를
// 확인할 수 없었기 때문에, 모든 그림은 자료를 참고해 새로 그린 단순 SVG 도해입니다.
// 나중에 허가받은 실제 사진을 추가할 때는 kind: 'photo'로 등록하고 credit/license를 반드시 채웁니다.
const SELF = 'NAIL LAB 자체 제작 SVG 도해';
const SELF_LICENSE = '자체 제작 · 이 프로젝트 안에서 자유 사용 (외부 이미지 복제 없음)';

export const IMAGES: ImageAsset[] = [
  {
    id: 'svg-drill-diagram',
    kind: 'illustration',
    alt: '본체(컨트롤러), 코드, 핸드피스, 척, 비트, 풋 페달로 구성된 분리형 네일드릴 구조 도해',
    credit: SELF,
    license: SELF_LICENSE,
    references: ['medicool-manual', 'medicool-guide'],
    note: '특정 제품이 아니라 일반적인 구조를 그린 도해예요. 실제 버튼 위치와 모양은 제품마다 달라요.',
  },
  {
    id: 'svg-grit-concept',
    kind: 'illustration',
    alt: '입도별 입자 크기와 홈 깊이를 비교한 개념도',
    credit: SELF,
    license: SELF_LICENSE,
    references: ['thenailwiki-bits', 'staleks-expert'],
    note: '서로 비교해 보려고 그린 그림이에요. 실제 입자 크기나 비율이 아니에요.',
  },
  {
    id: 'svg-direction-diagram',
    kind: 'illustration',
    alt: '드릴 쓰는 사람 시점으로 손톱을 내려다본 도해와 이동 방향 점선 화살표, 보는 자리·손톱 방향 전환',
    credit: SELF,
    license: SELF_LICENSE,
    references: ['opi-efile-prep', 'thenailwiki-machine', 'katiebarnes-direction'],
    note: '드릴을 쓰는 사람이 손톱을 내려다보는 시점으로 그린 도해예요. 화살표는 제 기억 속 작업 방향이고, 확정된 방향이 아니에요.',
  },
  {
    id: 'svg-bullet-family',
    kind: 'illustration',
    alt: '불릿, 라운드 콘, 풋볼, 테이퍼드 배럴 실루엣 비교',
    credit: SELF,
    license: SELF_LICENSE,
    references: ['thenailwiki-bits', 'efilebits-guide', 'nailsmag-bits'],
    note: '자료의 모양 설명을 바탕으로 단순하게 그린 실루엣이에요. 제가 쓰는 실제 비트와 같은지는 사진으로 확인해야 해요.',
  },
  ...SHAPES.map<ImageAsset>((s) => ({
    id: s.image,
    kind: 'illustration',
    alt: `${s.ko}(${s.en}) 비트 측면 도해`,
    credit: SELF,
    license: SELF_LICENSE,
    references: s.sources,
    note: '대표적인 모양을 단순하게 그린 도해예요. 실제 제품의 비율과 크기는 제조사마다 달라요.',
  })),
];

export const IMAGE_MAP: Record<string, ImageAsset> = Object.fromEntries(IMAGES.map((i) => [i.id, i]));
