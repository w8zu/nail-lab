import { useState, type ReactNode } from 'react';
import { SHAPES } from '../../content/part2/shapes';
import { MATERIALS, TARGET_MAP } from '../../content/part2/materials';
import type { MaterialId, Shape, ShapeId } from '../../content/types';
import BitSvg from '../illustrations/BitSvg';
import ClaimList from '../common/ClaimList';

// 인터랙션 3. 비트 비교 — 두 모양을 고르고, 각각 재질도 따로 골라 나란히 비교
interface Pick {
  shape: ShapeId;
  material: MaterialId | null;
}

const ROWS: { key: string; label: string; render: (s: Shape) => ReactNode }[] = [
  { key: 'form', label: '모양', render: (s) => s.form },
  {
    key: 'material',
    label: '재질 선택지',
    render: (s) => (
      <div className="mat-dots">
        {MATERIALS.map((m) => (
          <span key={m.id} className={`mat-dot ${s.seenMaterials.includes(m.id) ? 'is-seen' : ''}`}>
            {m.ko.split(' ')[0]}
          </span>
        ))}
      </div>
    ),
  },
  { key: 'purpose', label: '주요 용도', render: (s) => <ClaimList claims={s.purposes} /> },
  {
    key: 'target',
    label: '작업 대상',
    render: (s) => (
      <div className="target-tags">
        {s.targets.map((t) => (
          <span key={t} className={`tag target-${t}`}>
            {TARGET_MAP[t].ko}
          </span>
        ))}
      </div>
    ),
  },
  { key: 'caution', label: '주의할 점', render: (s) => <ClaimList claims={s.cautions} /> },
];

export default function BitCompare() {
  const [picks, setPicks] = useState<[Pick, Pick]>([
    { shape: 'straight-barrel', material: 'carbide' },
    { shape: 'safety-barrel', material: 'carbide' },
  ]);

  const setPick = (i: 0 | 1, p: Partial<Pick>) =>
    setPicks((prev) => {
      const next = [...prev] as [Pick, Pick];
      const merged = { ...next[i], ...p };
      if (p.shape) merged.material = SHAPES.find((s) => s.id === p.shape)!.seenMaterials[0] ?? null;
      next[i] = merged;
      return next;
    });

  const shapes = picks.map((p) => SHAPES.find((s) => s.id === p.shape)!);

  return (
    <div className="compare">
      <div className="compare-cols">
        {([0, 1] as const).map((i) => {
          const s = shapes[i];
          const p = picks[i];
          const unverified = p.material !== null && !s.seenMaterials.includes(p.material);
          return (
            <div key={i} className={`compare-col card col-${i}`}>
              <label className="select-label">
                <span>{i === 0 ? '비트 A' : '비트 B'}</span>
                <select value={p.shape} onChange={(e) => setPick(i, { shape: e.target.value as ShapeId })}>
                  {SHAPES.map((x) => (
                    <option key={x.id} value={x.id}>
                      {x.ko}
                    </option>
                  ))}
                </select>
              </label>
              <div className="compare-figure">
                <BitSvg shape={s.id} material={p.material} unverified={unverified} className="compare-svg" title={`${s.ko} 도해`} />
              </div>
              {s.id !== 'brush-polish' && (
                <label className="select-label small">
                  <span>재질</span>
                  <select value={p.material ?? ''} onChange={(e) => setPick(i, { material: e.target.value as MaterialId })}>
                    {MATERIALS.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.ko}
                        {s.seenMaterials.includes(m.id) ? ' ✓' : ' (자료 미확인)'}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              <h4 className="compare-name">
                {s.ko} <span className="bit-en">{s.en}</span>
              </h4>
              {s.proOnly && <span className="badge badge-pro">전문가 작업 영역</span>}
            </div>
          );
        })}
      </div>

      <div className="compare-table" role="table" aria-label="비트 비교표">
        {ROWS.map((r) => (
          <div key={r.key} className="compare-row" role="row">
            <div className="compare-row-label" role="rowheader">
              {r.label}
            </div>
            {([0, 1] as const).map((i) => (
              <div key={i} className="compare-cell" role="cell">
                {r.render(shapes[i])}
              </div>
            ))}
          </div>
        ))}
      </div>

      <CombinationMatrix highlight={picks.map((p) => p.shape)} />
    </div>
  );
}

function CombinationMatrix({ highlight }: { highlight: ShapeId[] }) {
  return (
    <div className="matrix-wrap">
      <h4 className="sub-title">모양 × 재질 조합표</h4>
      <p className="lead small">
        같은 모양도 여러 재질로 나오고, 같은 재질도 여러 모양으로 나와요. ● 는 이번에 조사한 자료에서 실제로 확인한 조합이에요. 빈칸은 "없다"가 아니라 "확인하지 못했다"는 뜻이에요.
      </p>
      <div className="matrix-scroll">
        <table className="matrix">
          <thead>
            <tr>
              <th scope="col">모양 \ 재질</th>
              {MATERIALS.map((m) => (
                <th key={m.id} scope="col">
                  {m.ko.split(' ')[0]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SHAPES.map((s) => (
              <tr key={s.id} className={highlight.includes(s.id) ? 'is-hl' : ''}>
                <th scope="row">{s.ko}</th>
                {MATERIALS.map((m) => (
                  <td key={m.id} aria-label={s.seenMaterials.includes(m.id) ? '확인됨' : '미확인'}>
                    {s.seenMaterials.includes(m.id) ? <span className="dot-on">●</span> : <span className="dot-off">·</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
