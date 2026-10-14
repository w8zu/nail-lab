import { useState } from 'react';
import { DRILL_PARTS, DRILL_VARIANTS } from '../../content/part1/drill';
import DrillDiagram, { DIAGRAM_VIEWBOX as VB } from '../illustrations/DrillDiagram';
import ClaimList, { NeedsSource, SourceRefs } from '../common/ClaimList';
import ImageCredit from '../common/ImageCredit';

// 인터랙션 1. 구조 탐색 — 도해 위 핫스팟을 누르면 패널에 명칭과 역할이 나타난다.
export default function DrillExplorer() {
  const [active, setActive] = useState<string>('handpiece');
  const part = DRILL_PARTS.find((p) => p.id === active)!;

  return (
    <div className="explorer">
      <figure className="explorer-figure">
        <div className="diagram-wrap">
          <DrillDiagram active={active} />
          {DRILL_PARTS.map((p, i) => (
            <button
              key={p.id}
              className={`hotspot ${active === p.id ? 'is-active' : ''}`}
              style={{ left: `${((p.hotspot.x - VB.x) / VB.w) * 100}%`, top: `${((p.hotspot.y - VB.y) / VB.h) * 100}%` }}
              onClick={() => setActive(p.id)}
              aria-pressed={active === p.id}
              aria-label={`${i + 1}. ${p.ko} 설명 보기`}
            >
              <span>{i + 1}</span>
            </button>
          ))}
        </div>
        <figcaption>
          <ImageCredit id="svg-drill-diagram" />
        </figcaption>
        <div className="part-chips" aria-label="부위 목록">
          {DRILL_PARTS.map((p, i) => (
            <button key={p.id} aria-pressed={active === p.id} className={`chip ${active === p.id ? 'is-active' : ''}`} onClick={() => setActive(p.id)}>
              {i + 1}. {p.ko}
            </button>
          ))}
        </div>
      </figure>

      <aside className="explorer-panel card" aria-live="polite" key={part.id}>
        <p className="eyebrow">{part.en}</p>
        <h4>{part.ko}</h4>
        <p className="panel-role">{part.role}</p>
        <ClaimList claims={part.details} />
        <p className="panel-src">
          근거 <SourceRefs ids={part.sources} />
        </p>
      </aside>

      <div className="variants">
        <h4 className="sub-title">제품마다 다른 구조</h4>
        <div className="card-grid three">
          {DRILL_VARIANTS.map((v) => (
            <article key={v.id} className="card variant">
              <VariantIcon id={v.id} />
              <h5>{v.name}</h5>
              <p>
                {v.desc} {v.needsSource && <NeedsSource />}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function VariantIcon({ id }: { id: string }) {
  const ink = '#3a3330';
  const desktop = id === 'desktop';
  return (
    <svg viewBox="0 0 160 70" className="variant-icon" aria-hidden="true">
      {id !== 'pen' && (
        <>
          <rect x={desktop ? 6 : 14} y={desktop ? 14 : 24} width={desktop ? 52 : 30} height={desktop ? 42 : 30} rx="8" fill="#f3ece4" stroke={ink} strokeWidth="1.5" />
          <path d={`M${desktop ? 58 : 44} 44 C70 52 76 40 86 36`} fill="none" stroke={ink} strokeWidth="2" />
        </>
      )}
      <path
        d={id === 'pen' ? 'M30 30 H128 L142 34 V40 L128 44 H30 Q24 44 24 37 Q24 30 30 30 Z' : 'M86 30 H132 L146 34 V40 L132 44 H86 Z'}
        fill="#f3ece4"
        stroke={ink}
        strokeWidth="1.5"
      />
      {id === 'pen' && <circle cx="70" cy="37" r="3" fill={ink} />}
      <rect x="146" y="35.5" width="10" height="3" fill="#bdb6af" />
    </svg>
  );
}
