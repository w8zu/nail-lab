import { useState } from 'react';
import { CONCEPTS } from '../../content/part1/basics';
import ClaimList from '../common/ClaimList';

export default function ConceptTabs() {
  const [tab, setTab] = useState(CONCEPTS[0].id);
  const c = CONCEPTS.find((x) => x.id === tab)!;
  return (
    <div className="concept-tabs">
      <div className="tabs" role="tablist" aria-label="기초 조작 개념">
        {CONCEPTS.map((x) => (
          <button key={x.id} role="tab" aria-selected={tab === x.id} className={`tab ${tab === x.id ? 'is-active' : ''}`} onClick={() => setTab(x.id)}>
            {x.title.split(' — ')[0]}
          </button>
        ))}
      </div>
      <div className="tab-panel card" role="tabpanel" key={c.id}>
        <div className="tab-text">
          {c.term && <p className="eyebrow">{c.term}</p>}
          <h4>{c.title}</h4>
          <p className="panel-role">{c.summary}</p>
          <ClaimList claims={c.points} />
        </div>
        <div className="tab-visual">
          <ConceptVisual id={c.id} />
        </div>
      </div>
    </div>
  );
}

function ConceptVisual({ id }: { id: string }) {
  const [dir, setDir] = useState<'F' | 'R'>('F');
  const [level, setLevel] = useState(0);

  if (id === 'direction') {
    return (
      <div className="visual-box">
        <svg viewBox="0 0 160 160" className={`spin-svg ${dir === 'F' ? 'spin-cw' : 'spin-ccw'}`} role="img" aria-label={dir === 'F' ? '시계 방향 회전' : '반시계 방향 회전'}>
          <circle cx="80" cy="80" r="30" fill="#e9e3dc" stroke="#3a3330" strokeWidth="2" />
          <circle cx="80" cy="80" r="4" fill="#3a3330" />
          <g className="spin-arrows">
            <path d="M80 28 A52 52 0 0 1 132 80" fill="none" stroke="#b98c8c" strokeWidth="4" strokeLinecap="round" />
            <path d="M80 132 A52 52 0 0 1 28 80" fill="none" stroke="#b98c8c" strokeWidth="4" strokeLinecap="round" />
            <path d={dir === 'F' ? 'M132 80 l-9 -9 M132 80 l8 -10' : 'M80 28 l10 -7 M80 28 l10 7'} stroke="#b98c8c" strokeWidth="4" strokeLinecap="round" />
            <path d={dir === 'F' ? 'M28 80 l9 9 M28 80 l-8 10' : 'M80 132 l-10 7 M80 132 l-10 -7'} stroke="#b98c8c" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
        <div className="seg" role="group" aria-label="회전 방향">
          <button aria-pressed={dir === 'F'} className={dir === 'F' ? 'is-active' : ''} onClick={() => setDir('F')}>
            정회전 F
          </button>
          <button aria-pressed={dir === 'R'} className={dir === 'R' ? 'is-active' : ''} onClick={() => setDir('R')}>
            역회전 R
          </button>
        </div>
        <p className="visual-note">회전 방향을 보여 주는 그림이에요. 어느 쪽을 "정회전"이라고 부르는지, 스위치를 어떻게 표시하는지는 제품마다 달라요. 설명서를 확인하세요.</p>
      </div>
    );
  }

  if (id === 'heat') {
    // 압력·체류 시간이 늘면 열이 쌓인다는 "관계"만 보여주는 개념도. 수치 없음.
    const labels = ['가볍게 · 자주 떼기', '조금 세게 · 조금 오래', '세게 · 한 곳에 오래'];
    return (
      <div className="visual-box">
        <div className="heat-meter" role="img" aria-label={`열 축적 개념: ${labels[level]}`}>
          <div className="heat-fill" style={{ height: `${22 + level * 36}%` }} />
        </div>
        <input type="range" min={0} max={2} step={1} value={level} onChange={(e) => setLevel(+e.target.value)} aria-label="압력과 접촉 시간 단계" />
        <p className="visual-label">{labels[level]}</p>
        <p className="visual-note">관계만 보여 주는 그림이에요. 실제 온도나 "안전한 접촉 시간"을 뜻하지 않아요.</p>
      </div>
    );
  }

  if (id === 'rpm') {
    return (
      <div className="visual-box">
        <svg viewBox="0 0 200 116" className="gauge" aria-hidden="true">
          <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#e6dcd1" strokeWidth="14" strokeLinecap="round" />
          <path d="M20 100 A80 80 0 0 1 100 20" fill="none" stroke="#d9b8b4" strokeWidth="14" strokeLinecap="round" />
          <line x1="100" y1="100" x2="62" y2="48" stroke="#3a3330" strokeWidth="4" strokeLinecap="round" />
          <circle cx="100" cy="100" r="6" fill="#3a3330" />
          <text x="20" y="114" fontSize="10" textAnchor="middle" fill="#8a7f78">
            느림
          </text>
          <text x="180" y="114" fontSize="10" textAnchor="middle" fill="#8a7f78">
            빠름
          </text>
        </svg>
        <p className="visual-label">숫자 눈금은 일부러 넣지 않았어요</p>
        <p className="visual-note">알맞은 RPM은 기기·비트 제조사 안내를 따르세요. 모든 기기에 통하는 숫자는 따로 적지 않았어요.</p>
      </div>
    );
  }

  return (
    <div className="visual-box">
      <svg viewBox="0 0 220 90" className="mount-svg" role="img" aria-label="비트 막대를 척에 끝까지 넣는 그림">
        <rect x="10" y="30" width="110" height="30" rx="8" fill="#f3ece4" stroke="#3a3330" strokeWidth="2" />
        <rect x="120" y="34" width="22" height="22" fill="#cfc8c0" stroke="#3a3330" strokeWidth="2" />
        <g className="mount-bit">
          <rect x="142" y="42" width="50" height="6" fill="#cfc8c0" stroke="#3a3330" strokeWidth="1.2" />
          <rect x="192" y="36" width="20" height="18" rx="2" fill="#bdb6af" stroke="#3a3330" strokeWidth="1.5" />
        </g>
        <text x="65" y="82" fontSize="10" textAnchor="middle" fill="#8a7f78">
          전원을 끈 상태에서
        </text>
      </svg>
      <p className="visual-note">막대를 끝까지 넣고 잠근 뒤, 비트가 흔들리지 않는지 확인해요. 잠그는 방법은 제품 설명서를 따르세요.</p>
    </div>
  );
}
