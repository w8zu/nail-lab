import { useMemo, useState } from 'react';
import { GRITS, GRIT_FACTS, MAKER_COLOR_EXAMPLE } from '../../content/part2/grit';
import ClaimList, { SourceRefs } from '../common/ClaimList';
import ImageCredit from '../common/ImageCredit';

// 인터랙션 4. 입도 설명 — 확대 단면 개념도. 색으로 입도를 표현하지 않는다.
type Mode = 'abrasive' | 'cutting';

// 고정 시드 의사난수 (렌더마다 입자 위치가 바뀌지 않게)
function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function GritVisualizer() {
  const [level, setLevel] = useState(2);
  const [mode, setMode] = useState<Mode>('abrasive');
  const g = GRITS[level];

  const particles = useMemo(() => {
    const r = rand(7 + level);
    const size = 2 + g.relative * 9;
    const out: { x: number; r: number }[] = [];
    for (let x = 6; x < 394; x += size * 1.6 + r() * size * 0.6) {
      out.push({ x, r: size * (0.75 + r() * 0.4) });
    }
    return out;
  }, [level, g.relative]);

  const teeth = useMemo(() => {
    const count = Math.round(34 - g.relative * 22);
    const depth = 4 + g.relative * 18;
    const w = 388 / count;
    let d = 'M6 70';
    for (let i = 0; i < count; i++) {
      const x = 6 + i * w;
      d += ` L${x + w * 0.7} ${70 - depth} L${x + w} 70`;
    }
    return d;
  }, [g.relative]);

  // 지나간 뒤 남는 표면 — 거칠수록 골이 깊다
  const scratch = useMemo(() => {
    const r = rand(31 + level);
    const amp = 0.6 + g.relative * 7;
    let d = 'M6 150';
    for (let x = 6; x <= 394; x += 6) d += ` L${x} ${150 + (r() - 0.5) * 2 * amp}`;
    return d;
  }, [level, g.relative]);

  return (
    <div className="grit">
      <div className="grit-panel card">
        <div className="grit-controls">
          <div className="seg" role="group" aria-label="비트 작동 방식">
            <button aria-pressed={mode === 'abrasive'} className={mode === 'abrasive' ? 'is-active' : ''} onClick={() => setMode('abrasive')}>
              연마형 (입자)
            </button>
            <button aria-pressed={mode === 'cutting'} className={mode === 'cutting' ? 'is-active' : ''} onClick={() => setMode('cutting')}>
              절삭형 (날)
            </button>
          </div>
          <div className="grit-scale">
            <input type="range" min={0} max={GRITS.length - 1} value={level} onChange={(e) => setLevel(+e.target.value)} aria-label="입도 단계" aria-valuetext={g.en} />
            <div className="grit-ticks">
              {GRITS.map((x, i) => (
                <button key={x.id} className={i === level ? 'is-active' : ''} onClick={() => setLevel(i)}>
                  {x.en}
                </button>
              ))}
            </div>
          </div>
        </div>

        <svg viewBox="0 0 400 180" className="grit-svg" role="img" aria-label={`${g.en} ${mode === 'abrasive' ? '연마형 입자' : '절삭형 날'} 개념도`}>
          <text x="6" y="14" fontSize="10" fill="#8a7f78">
            비트 표면 (확대 단면)
          </text>
          <rect x="6" y="70" width="388" height="22" fill="#d9d2ca" />
          {mode === 'abrasive' ? (
            particles.map((p, i) => <circle key={i} cx={p.x} cy={70 - p.r * 0.55} r={p.r} fill="#8f857c" stroke="#6f6760" strokeWidth="0.6" />)
          ) : (
            <path d={`${teeth} V92 H6 Z`} fill="#b9b3ad" stroke="#6d6660" strokeWidth="1" />
          )}
          <text x="6" y="122" fontSize="10" fill="#8a7f78">
            지나간 뒤 남는 표면
          </text>
          <path d={`${scratch} V172 H6 Z`} fill="#efd9d4" stroke="#b98c8c" strokeWidth="1.2" />
        </svg>

        <div className="grit-caption">
          <h4>
            {g.en} <span className="muted">· {g.ko}</span>
          </h4>
          <p>{g.meaning}</p>
          <p className="visual-note">
            {mode === 'abrasive'
              ? '연마형: 입자가 클수록(거칠수록) 한 번에 더 많이 갈리고, 더 깊은 자국이 남아요.'
              : '절삭형: 날이 크고 깊고 적을수록(거칠수록) 한 번에 크게 깎여요. 입자 크기가 아니라 날 모양의 차이예요.'}
          </p>
          <ImageCredit id="svg-grit-concept" />
        </div>
      </div>

      <div className="card-grid three grit-facts">
        {GRIT_FACTS.map((f) => (
          <article key={f.title} className="card">
            <h5>{f.title}</h5>
            <ClaimList claims={f.claims} />
          </article>
        ))}
      </div>

      <div className="maker-example card">
        <div>
          <p className="eyebrow">제조사 한 곳의 실제 표기 예시 · 업계 표준 아님</p>
          <h5>
            {MAKER_COLOR_EXAMPLE.maker} <SourceRefs ids={[MAKER_COLOR_EXAMPLE.source]} />
          </h5>
          <p className="muted small">다른 제조사는 같은 색을 다른 입도에 쓰거나, 보라·흰색·노랑 같은 색을 더 쓰기도 해요. 가지고 있는 비트는 그 제조사의 입도표로 확인하세요.</p>
        </div>
        <ul className="maker-rows">
          {MAKER_COLOR_EXAMPLE.rows.map((r) => (
            <li key={r.grit}>
              <span className="ring-swatch" style={{ background: r.color }} aria-hidden="true" />
              <strong>{r.name}</strong> → {r.grit}
              <span className="muted"> · {r.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
