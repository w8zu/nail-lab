import { useState, type CSSProperties } from 'react';
import { DIRECTION_BASIS, MOVEMENT_DEPENDS, MOVEMENT_SAFETY, MY_MOVEMENT, ROTATION_FACTS, SOURCE_NOTE } from '../../content/part3/direction';
import ClaimList, { ClaimText } from '../common/ClaimList';
import ImageCredit from '../common/ImageCredit';
import OriginBadge from './OriginBadge';

type Viewer = 'me' | 'opposite';
type NailDir = 'tip-far' | 'tip-near';

// ① 회전(확인된 정의 → 애니메이션)  ② 이동(개인 기억 → 정적 점선, 추가 확인 필요)
// 이동 도해는 "드릴을 쓰는 사람 시점"을 기준으로 그리고, 보는 자리·손톱 방향만 바꿔 볼 수 있게 한다.
export default function DirectionExplorer() {
  const [rot, setRot] = useState<'F' | 'R'>('F');
  const [viewer, setViewer] = useState<Viewer>('me');
  const [nailDir, setNailDir] = useState<NailDir>('tip-far');
  const dimMove = rot !== MY_MOVEMENT.rotation;
  const [a1, a2] = MY_MOVEMENT.arrows;
  const lbl = (a: (typeof MY_MOVEMENT.arrows)[number]) => (viewer === 'me' ? a.label : a.oppositeLabel);

  return (
    <div className="direction">
      <article className="card direction-basis">
        <p className="eyebrow">먼저, 방향의 기준</p>
        <h4>위·아래·왼쪽·오른쪽은 "드릴을 쓰는 사람" 눈으로 봐요</h4>
        <ClaimList claims={DIRECTION_BASIS} />
      </article>

      <div className="direction-grid">
        {/* ① 회전 */}
        <section className="card direction-panel">
          <p className="eyebrow">① 비트가 도는 방향 (회전)</p>
          <h4>F / R 스위치</h4>
          <div className="seg" role="group" aria-label="회전 방향 선택">
            <button aria-pressed={rot === 'F'} className={rot === 'F' ? 'is-active' : ''} onClick={() => setRot('F')}>
              정회전 F
            </button>
            <button aria-pressed={rot === 'R'} className={rot === 'R' ? 'is-active' : ''} onClick={() => setRot('R')}>
              역회전 R
            </button>
          </div>
          <svg viewBox="0 0 200 200" className={`rot-svg ${rot === 'F' ? 'spin-cw' : 'spin-ccw'}`} role="img" aria-label={rot === 'F' ? '시계 방향 회전' : '반시계 방향 회전'}>
            <circle cx="100" cy="100" r="40" fill="#e9e3dc" stroke="#3a3330" strokeWidth="2" />
            <circle cx="100" cy="100" r="9" fill="#cfc8c0" stroke="#3a3330" strokeWidth="1.5" />
            <g className="spin-arrows" style={{ transformOrigin: '100px 100px' }}>
              <path d="M100 38 A62 62 0 0 1 162 100" fill="none" stroke="#a9777a" strokeWidth="5" strokeLinecap="round" />
              <path d="M100 162 A62 62 0 0 1 38 100" fill="none" stroke="#a9777a" strokeWidth="5" strokeLinecap="round" />
              {rot === 'F' ? (
                <>
                  <path d="M162 100 l-9 -11 M162 100 l10 -9" stroke="#a9777a" strokeWidth="5" strokeLinecap="round" />
                  <path d="M38 100 l9 11 M38 100 l-10 9" stroke="#a9777a" strokeWidth="5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M100 38 l11 -9 M100 38 l11 9" stroke="#a9777a" strokeWidth="5" strokeLinecap="round" />
                  <path d="M100 162 l-11 9 M100 162 l-11 -9" stroke="#a9777a" strokeWidth="5" strokeLinecap="round" />
                </>
              )}
            </g>
            <text x="100" y="196" textAnchor="middle" fontSize="11" fill="#857a73">
              핸드피스 뒤에서 비트 끝을 본 시점 (가정)
            </text>
          </svg>
          <p className="visual-label">{rot === 'F' ? '정회전 = 시계 방향' : '역회전 = 반시계 방향'}</p>
          <p className="dir-kind">
            <span className="dir-kind-icon is-rot" aria-hidden="true" /> 둥근 화살표 = 비트가 스스로 도는 방향
          </p>
          <ClaimList claims={ROTATION_FACTS} />
        </section>

        {/* ② 이동 */}
        <section className="card direction-panel">
          <p className="eyebrow">② 손으로 비트를 옮기는 방향 (이동)</p>
          <h4>보는 자리에 따라 방향이 바뀌어 보여요</h4>

          <div className="dir-controls">
            <div>
              <span className="control-label">누가 보나요?</span>
              <div className="seg" role="group" aria-label="보는 사람 선택">
                <button aria-pressed={viewer === 'me'} className={viewer === 'me' ? 'is-active' : ''} onClick={() => setViewer('me')}>
                  드릴 쓰는 사람 (기준)
                </button>
                <button aria-pressed={viewer === 'opposite'} className={viewer === 'opposite' ? 'is-active' : ''} onClick={() => setViewer('opposite')}>
                  마주 앉은 사람
                </button>
              </div>
            </div>
            <div>
              <span className="control-label">손톱이 놓인 방향 (드릴 쓰는 사람 기준)</span>
              <div className="seg" role="group" aria-label="손톱 방향 선택">
                <button aria-pressed={nailDir === 'tip-far'} className={nailDir === 'tip-far' ? 'is-active' : ''} onClick={() => setNailDir('tip-far')}>
                  손끝이 먼 쪽
                </button>
                <button aria-pressed={nailDir === 'tip-near'} className={nailDir === 'tip-near' ? 'is-active' : ''} onClick={() => setNailDir('tip-near')}>
                  손끝이 내 쪽
                </button>
              </div>
            </div>
          </div>

          <div className="nail-stage">
            <span className="edge edge-top">위 · 보는 사람에게서 먼 쪽</span>
            <div className="nail-row">
              <span className="edge edge-side">왼쪽</span>
              <div className="nail-wrap">
                <NailTopView viewer={viewer} nailDir={nailDir} dim={dimMove} />
                <span className="unconfirmed-stamp">추가 확인 필요 · 제 기억</span>
              </div>
              <span className="edge edge-side">오른쪽</span>
            </div>
            <span className="edge edge-bottom">
              아래 · 가까운 쪽 — 지금 보는 사람: <strong>{viewer === 'me' ? '드릴 쓰는 사람' : '마주 앉은 사람'}</strong>
            </span>
          </div>

          <p className="dir-kind">
            <span className="dir-kind-icon is-move" aria-hidden="true" /> 곧은 점선 화살표 = 손으로 비트를 옮기는 방향
          </p>
          <ul className="arrow-legend">
            {[a1, a2].map((a) => (
              <li key={a.id} className={dimMove ? 'is-dim' : ''}>
                <span className="legend-key key-F">{a.id}</span>
                <span>
                  <strong>{lbl(a)}</strong> <span className="muted">· F로 돌릴 때</span>
                </span>
              </li>
            ))}
          </ul>
          {dimMove && <p className="muted small dim-note">지금은 R을 골랐어요. 제가 기억하는 움직임은 F일 때라서 흐리게 표시했어요.</p>}

          <div className="view-text" key={`${viewer}-${nailDir}`}>
            <p>
              {viewer === 'me'
                ? `드릴을 쓰는 내 눈에는 ① ${a1.label}, ② ${a2.label} 방향으로 보여요.`
                : `마주 앉은 사람 눈에는 같은 움직임이 ① ${a1.oppositeLabel}, ② ${a2.oppositeLabel} 방향으로 보여요. 움직임은 그대로이고, 보는 자리만 바뀌었어요. 그래서 이 가이드는 항상 드릴 쓰는 사람 시점으로 말해요.`}
            </p>
            <p>
              {nailDir === 'tip-far'
                ? '손끝이 먼 쪽에 있으면, ①의 위 → 아래는 손끝 쪽에서 큐티클 쪽으로 가는 움직임이에요.'
                : '손끝이 내 쪽에 있으면, 같은 ①의 위 → 아래가 큐티클 쪽에서 손끝 쪽으로 가는 움직임이 돼요.'}{' '}
              <span className="muted">예를 들어 셀프네일에서 손을 앞으로 뻗어 두면 손끝이 먼 쪽에 있어요.</span>
            </p>
          </div>

          <div className="my-movement">
            <OriginBadge origin={MY_MOVEMENT.origin} />
            <p>{MY_MOVEMENT.summary}</p>
            <p className="muted small">
              <ClaimText claim={MY_MOVEMENT.note} />
            </p>
          </div>
          <ImageCredit id="svg-direction-diagram" />
        </section>
      </div>

      <article className="card source-note">
        <OriginBadge origin="research" />
        <p>
          <ClaimText claim={SOURCE_NOTE} />
        </p>
      </article>

      <h4 className="sub-title">실제 움직임은 이런 것에 따라 달라져요</h4>
      <div className="card-grid three">
        {MOVEMENT_DEPENDS.map((w) => (
          <article key={w.title} className="card">
            <h5>{w.title}</h5>
            <ClaimList claims={w.claims} />
          </article>
        ))}
      </div>

      <article className="card safety level-stop movement-safety">
        <div className="safety-head static">
          <span className="badge level-badge level-stop">주의</span>
          <span className="safety-title">조심해야 하는 움직임</span>
        </div>
        <ClaimList claims={MOVEMENT_SAFETY} />
      </article>
    </div>
  );
}

const rotStyle = (deg: number): CSSProperties => ({ transform: `rotate(${deg}deg)` });

// 손톱을 위에서 내려다본 도해. 기본 좌표는 "드릴 쓰는 사람" 시점(아래쪽이 그 사람 자리).
// 보는 사람이 바뀌면 장면 전체를 180° 돌리고, 손톱 방향이 바뀌면 손가락만 180° 돌린다.
// 글자는 반대로 돌려 항상 똑바로 읽히게 한다. 이동 화살표는 정적 점선(움직이는 애니메이션 없음).
function NailTopView({ viewer, nailDir, dim }: { viewer: Viewer; nailDir: NailDir; dim: boolean }) {
  const sceneDeg = viewer === 'opposite' ? 180 : 0;
  const nailDeg = nailDir === 'tip-near' ? 180 : 0;
  const ink = '#3a3330';
  return (
    <svg
      viewBox="0 0 360 360"
      className="nail-svg"
      role="img"
      aria-label={`손톱을 위에서 본 도해. 보는 사람: ${viewer === 'me' ? '드릴 쓰는 사람' : '마주 앉은 사람'}, 손끝: ${nailDir === 'tip-far' ? '드릴 쓰는 사람에게서 먼 쪽' : '드릴 쓰는 사람 쪽'}`}
    >
      <defs>
        <marker id="move-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill={ink} />
        </marker>
      </defs>
      <g className="scene" style={rotStyle(sceneDeg)}>
        {/* 손가락 + 손톱 (손톱 방향 토글로 회전) */}
        <g className="scene" style={rotStyle(nailDeg)}>
          <path d="M112 372 V112 Q112 52 180 52 Q248 52 248 112 V372 Z" fill="#f3e3dc" stroke="#cbb8a3" strokeWidth="1.5" />
          <path d="M128 250 V120 Q128 74 180 74 Q232 74 232 120 V250 Q180 232 128 250 Z" fill="#fbf4f1" stroke="#b98c8c" strokeWidth="1.5" />
          <path d="M124 254 Q180 234 236 254" fill="none" stroke="#a9777a" strokeWidth="2" strokeDasharray="3 3" />
          <text className="upright" style={rotStyle(-(sceneDeg + nailDeg))} x="152" y="100" textAnchor="middle" fontSize="12" fill="#857a73">
            손끝
          </text>
          <text className="upright" style={rotStyle(-(sceneDeg + nailDeg))} x="180" y="282" textAnchor="middle" fontSize="12" fill="#857a73">
            큐티클
          </text>
        </g>

        {/* 드릴 쓰는 사람 자리 (장면과 함께 돌아감) */}
        <g className="upright" style={rotStyle(-sceneDeg)}>
          <circle cx="36" cy="316" r="7" fill="none" stroke={ink} strokeWidth="1.5" />
          <path d="M24 340 Q36 322 48 340" fill="none" stroke={ink} strokeWidth="1.5" />
          <text x="56" y="334" fontSize="12" fill={ink} fontWeight="700">
            드릴 쓰는 사람
          </text>
        </g>

        {/* 이동 화살표 — 드릴 쓰는 사람 시점으로 정의한 개인 기억 */}
        {MY_MOVEMENT.arrows.map((a) => (
          <g key={a.id} className={`dir-arrow ${dim ? 'is-dim' : ''}`}>
            <line x1={a.from[0]} y1={a.from[1]} x2={a.to[0]} y2={a.to[1]} stroke={ink} strokeWidth="3" strokeDasharray="7 5" markerEnd="url(#move-arrow)" />
            <g className="upright" style={rotStyle(-sceneDeg)}>
              <circle cx={a.from[0]} cy={a.from[1]} r="10" fill={ink} />
              <text x={a.from[0]} y={a.from[1] + 4} textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">
                {a.id}
              </text>
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}
