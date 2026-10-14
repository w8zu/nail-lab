import type { ShapeId } from '../../content/types';

// 다른 파트(PART 3 등)에서 PART 2 비트 도감의 상세 화면을 여는 연결 고리.
// BitGallery가 이 이벤트를 듣고 해당 모양의 상세 모달을 연다.
const EVENT = 'naillab:open-bit';

export function openBit(shape: ShapeId) {
  window.dispatchEvent(new CustomEvent<ShapeId>(EVENT, { detail: shape }));
}

export function onOpenBit(handler: (shape: ShapeId) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<ShapeId>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
