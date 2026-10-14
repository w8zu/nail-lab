import { useCallback, useEffect, useState } from 'react';
import { SHAPES } from '../../content/part2/shapes';
import { TARGETS } from '../../content/part2/materials';
import type { TargetId } from '../../content/types';
import BitSvg from '../illustrations/BitSvg';
import BitDetail from './BitDetail';
import { onOpenBit } from './bitLink';

// 인터랙션 2. 비트 도감 — 모양 카드 목록 + 상세 모달(이전/다음 탐색)
export default function BitGallery() {
  const [filter, setFilter] = useState<TargetId | 'all'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const list = filter === 'all' ? SHAPES : SHAPES.filter((s) => s.targets.includes(filter));
  const close = useCallback(() => setOpenIndex(null), []);

  // 다른 파트에서 openBit(shape)로 요청하면 필터를 풀고 해당 비트 상세를 연다
  useEffect(
    () =>
      onOpenBit((shape) => {
        setFilter('all');
        setOpenIndex(SHAPES.findIndex((s) => s.id === shape));
      }),
    [],
  );

  return (
    <div className="gallery">
      <div className="filter-row" role="group" aria-label="작업 대상으로 걸러 보기">
        <span className="filter-label">작업 대상</span>
        <button className={`chip ${filter === 'all' ? 'is-active' : ''}`} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          전체
        </button>
        {TARGETS.map((t) => (
          <button key={t.id} className={`chip ${filter === t.id ? 'is-active' : ''}`} aria-pressed={filter === t.id} onClick={() => setFilter(t.id)} title={t.desc}>
            {t.ko}
          </button>
        ))}
      </div>

      <div className="bit-grid">
        {list.map((s, i) => (
          <button key={s.id} className="bit-card" onClick={() => setOpenIndex(i)} aria-label={`${s.ko} 상세 보기`}>
            <div className="bit-card-figure">
              <BitSvg shape={s.id} material={null} showRing={false} headOnly className="bit-card-svg" title={`${s.ko} 실루엣`} />
            </div>
            <div className="bit-card-body">
              <span className="bit-num">{String(SHAPES.indexOf(s) + 1).padStart(2, '0')}</span>
              <h4>{s.ko}</h4>
              <p className="bit-en">{s.en}</p>
              <p className="bit-form">{s.form}</p>
              {s.proOnly && <span className="badge badge-pro">전문가 작업 영역</span>}
            </div>
          </button>
        ))}
      </div>
      <p className="visual-note">카드 그림은 모양만 보여 주는 실루엣이에요. 재질은 상세 화면에서 바꿔 볼 수 있어요.</p>

      <BitDetail list={list} index={openIndex} onIndex={setOpenIndex} onClose={close} />
    </div>
  );
}
