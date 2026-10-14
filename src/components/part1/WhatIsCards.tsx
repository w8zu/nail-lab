import { useState } from 'react';
import { WHAT_IS } from '../../content/part1/drill';
import ClaimList from '../common/ClaimList';

export default function WhatIsCards() {
  const [open, setOpen] = useState<string | null>(WHAT_IS[0].id);
  return (
    <div className="card-grid three">
      {WHAT_IS.map((c) => {
        const isOpen = open === c.id;
        return (
          <article key={c.id} className={`card concept ${isOpen ? 'is-open' : ''}`}>
            {c.term && <p className="eyebrow">{c.term}</p>}
            <h4>{c.title}</h4>
            <p>{c.summary}</p>
            <button className="text-btn" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : c.id)}>
              {isOpen ? '접기' : '자세히 보기'}
            </button>
            {isOpen && <ClaimList claims={c.points} className="reveal" />}
          </article>
        );
      })}
    </div>
  );
}
