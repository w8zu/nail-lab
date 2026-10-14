// 분리형 네일드릴 일반 구조 도해 (특정 제품 아님).
export const DIAGRAM_VIEWBOX = { x: 16, y: 128, w: 804, h: 312 };
// 각 부위 <g data-part>는 content/part1/drill.ts의 DRILL_PARTS id와 일치해야 한다.

interface Props {
  active: string | null;
}

const INK = '#3a3330';
const BODY = '#f3ece4';
const METAL = '#cfc8c0';

export default function DrillDiagram({ active }: Props) {
  const cls = (id: string) => `dd-part${active === id ? ' is-active' : ''}`;
  return (
    <svg viewBox={`${DIAGRAM_VIEWBOX.x} ${DIAGRAM_VIEWBOX.y} ${DIAGRAM_VIEWBOX.w} ${DIAGRAM_VIEWBOX.h}`} className="drill-diagram" role="img" aria-label="네일드릴 구조 도해: 본체, 속도 다이얼, 방향 스위치, 코드, 핸드피스, 척, 비트, 풋 페달">
      {/* 풋 페달 코드 (선택 부속이라 점선) */}
      <path d="M200 320 C220 380 300 395 350 392" fill="none" stroke="#b5aba2" strokeWidth="3" strokeDasharray="6 6" />

      {/* 본체 */}
      <g className={cls('controller')}>
        <rect x="30" y="140" width="250" height="180" rx="20" fill={BODY} stroke={INK} strokeWidth="2" />
        <text x="155" y="306" textAnchor="middle" fontSize="13" fill="#8a7f78" letterSpacing="2">
          CONTROL
        </text>
      </g>

      {/* 속도 다이얼 */}
      <g className={cls('speed')}>
        <circle cx="140" cy="236" r="44" fill="#fffaf5" stroke={INK} strokeWidth="2" />
        {Array.from({ length: 9 }).map((_, i) => {
          const a = ((-225 + i * 33.75) * Math.PI) / 180;
          return (
            <line key={i} x1={140 + Math.cos(a) * 50} y1={236 + Math.sin(a) * 50} x2={140 + Math.cos(a) * 56} y2={236 + Math.sin(a) * 56} stroke={INK} strokeWidth="2" />
          );
        })}
        <line x1="140" y1="236" x2="118" y2="212" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <circle cx="140" cy="236" r="6" fill={INK} />
      </g>

      {/* 정·역회전 스위치 */}
      <g className={cls('direction')}>
        <rect x="234" y="186" width="28" height="56" rx="8" fill="#fffaf5" stroke={INK} strokeWidth="2" />
        <rect x="240" y="192" width="16" height="22" rx="5" fill={INK} />
        <text x="248" y="180" textAnchor="middle" fontSize="11" fill={INK}>
          F
        </text>
        <text x="248" y="258" textAnchor="middle" fontSize="11" fill={INK}>
          R
        </text>
      </g>

      {/* 코드 */}
      <g className={cls('cord')}>
        <path d="M280 290 C330 300 340 322 362 302 C382 282 400 226 440 214" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* 핸드피스 */}
      <g className={cls('handpiece')}>
        <path d="M440 204 Q440 194 452 194 H660 L690 203 V225 L660 234 H452 Q440 234 440 224 Z" fill={BODY} stroke={INK} strokeWidth="2" />
        {[520, 534, 548, 562, 576, 590].map((x) => (
          <line key={x} x1={x} y1="198" x2={x} y2="230" stroke="#cbbfb3" strokeWidth="2" />
        ))}
      </g>

      {/* 척 */}
      <g className={cls('chuck')}>
        <rect x="690" y="202" width="28" height="24" rx="3" fill={METAL} stroke={INK} strokeWidth="2" />
        {[696, 702, 708, 714].map((x) => (
          <line key={x} x1={x} y1="204" x2={x} y2="224" stroke="#9c948c" strokeWidth="1.5" />
        ))}
      </g>

      {/* 비트 */}
      <g className={cls('bit')}>
        <rect x="718" y="210" width="52" height="8" fill={METAL} stroke={INK} strokeWidth="1.5" />
        <rect x="740" y="209" width="8" height="10" fill="#e6dfd8" stroke={INK} strokeWidth="1" />
        <rect x="770" y="202" width="36" height="24" rx="2" fill="#bdb6af" stroke={INK} strokeWidth="2" />
        <path d="M774 202 L794 226 M786 202 L806 222 M770 214 L780 226 M790 202 L770 222 M802 202 L780 226" stroke="#6d6660" strokeWidth="1.2" />
      </g>

      {/* 풋 페달 */}
      <g className={cls('pedal')}>
        <path d="M352 412 L362 372 Q364 366 372 366 H452 Q460 366 462 372 L470 412 Z" fill={BODY} stroke={INK} strokeWidth="2" strokeDasharray="5 4" />
        <text x="411" y="434" textAnchor="middle" fontSize="12" fill="#8a7f78">
          선택 부속
        </text>
      </g>
    </svg>
  );
}
