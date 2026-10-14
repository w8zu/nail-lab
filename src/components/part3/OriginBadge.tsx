import type { Origin } from '../../content/types';

const LABEL: Record<Origin, string> = {
  personal: '나의 방식',
  research: '조사한 정보',
};

export default function OriginBadge({ origin }: { origin: Origin }) {
  return <span className={`badge origin origin-${origin}`}>{LABEL[origin]}</span>;
}
