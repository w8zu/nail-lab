import type { PartMeta } from './types';

// 파트 레지스트리 — 새 파트는 여기에 등록하고 App.tsx의 PART_VIEWS에 화면을 연결합니다.
export const PARTS: PartMeta[] = [
  {
    id: 'part1',
    label: 'PART 1',
    title: '네일드릴 기초',
    description: '드릴의 구조, 기본 조작, 안전 수칙',
    available: true,
  },
  {
    id: 'part2',
    label: 'PART 2',
    title: '네일비트 종류와 용도',
    description: '재질 · 모양 · 입도를 하나씩 따로 알아보기',
    available: true,
  },
  {
    id: 'part3',
    label: 'PART 3',
    title: '내가 쓰는 비트와 작업 방식',
    description: '네일숍에서 배운 제 방식과 따로 찾아본 정보',
    available: true,
  },
];
