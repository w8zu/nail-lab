import { useState } from 'react';
import { SAFETY } from '../../content/part1/basics';
import ClaimList from '../common/ClaimList';

const LEVEL_LABEL = { stop: '금지 · 중지', caution: '주의', info: '관리' } as const;

export default function SafetyGrid() {
  const [open, setOpen] = useState<string | null>('cuticle');
  return (
    <div className="card-grid two safety-grid">
      {SAFETY.map((s) => {
        const isOpen = open === s.id;
        return (
          <article key={s.id} className={`card safety level-${s.level} ${isOpen ? 'is-open' : ''}`}>
            <button className="safety-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : s.id)}>
              <span className={`badge level-badge level-${s.level}`}>{LEVEL_LABEL[s.level]}</span>
              <span className="safety-title">{s.title}</span>
              <span className="chev" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <p className="safety-summary">{s.summary}</p>
            {isOpen && <ClaimList claims={s.points} className="reveal" />}
          </article>
        );
      })}
    </div>
  );
}
