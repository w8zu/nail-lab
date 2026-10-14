import type { Claim, SourceId } from '../../content/types';
import { SOURCES, SOURCE_MAP } from '../../content/sources';

const INDEX: Record<string, number> = Object.fromEntries(SOURCES.map((s, i) => [s.id, i + 1]));

/** 본문 뒤에 붙는 [1][2] 형태의 출처 번호 링크 */
export function SourceRefs({ ids }: { ids?: SourceId[] }) {
  if (!ids?.length) return null;
  return (
    <span className="refs">
      {ids.map((id) => {
        const s = SOURCE_MAP[id];
        if (!s) return null;
        return (
          <a key={id} href={`#src-${id}`} className="ref" title={`${s.publisher} — ${s.title}`}>
            {INDEX[id]}
          </a>
        );
      })}
    </span>
  );
}

export function NeedsSource() {
  return (
    <span className="badge badge-unverified" title="이 문장은 조사한 공식 자료에서 직접 확인하지 못했어요">
      출처 확인 필요
    </span>
  );
}

export function ClaimText({ claim }: { claim: Claim }) {
  return (
    <>
      {claim.text}
      <SourceRefs ids={claim.sources} />
      {claim.needsSource && <NeedsSource />}
    </>
  );
}

export default function ClaimList({ claims, className }: { claims: Claim[]; className?: string }) {
  return (
    <ul className={`claims ${className ?? ''}`}>
      {claims.map((c, i) => (
        <li key={i}>
          <ClaimText claim={c} />
        </li>
      ))}
    </ul>
  );
}
