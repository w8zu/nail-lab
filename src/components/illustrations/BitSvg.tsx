import { useId } from 'react';
import type { GritId, MaterialId, ShapeId } from '../../content/types';

// 비트 측면 도해. 모양(shape) · 재질(material) · 입도(grit)를 각각 독립적으로 받아 그린다.
// - 모양: 머리(작업부) 실루엣
// - 재질: 표면 패턴 (다이아몬드=입자, 카바이드=교차 날, 세라믹=세로 홈, 샌딩밴드=종이 띠, 실리콘=무광 단색)
// - 입도: 패턴의 크기·간격 (색으로 표현하지 않음 — 색 링은 회색 줄무늬 + "제조사별 상이")
// viewBox 0 0 120 250 / 머리 영역 y 20~140, 목 140~150, 색 링 150~160, 축 160~246

interface Props {
  shape: ShapeId;
  material?: MaterialId | null;
  grit?: GritId | null;
  /** 이 모양+재질 조합이 자료에서 확인되지 않았을 때 점선 윤곽만 표시 */
  unverified?: boolean;
  showRing?: boolean;
  className?: string;
  title?: string;
  /** true면 머리(작업부)만 확대해 보여줌 */
  headOnly?: boolean;
}

const GRIT_SCALE: Record<GritId, number> = {
  'extra-fine': 0.55,
  fine: 0.75,
  medium: 1,
  coarse: 1.35,
  'extra-coarse': 1.7,
};

const HEAD_PATHS: Record<Exclude<ShapeId, 'brush-polish'>, string> = {
  'straight-barrel': 'M40 140 V40 H80 V140 Z',
  'tapered-barrel': 'M38 140 L45 42 Q46 38 50 38 H70 Q74 38 75 42 L82 140 Z',
  'safety-barrel': 'M40 140 V54 Q40 40 54 40 H66 Q80 40 80 54 V140 Z',
  bullet: 'M40 140 V64 C40 40 50 28 60 28 C70 28 80 40 80 64 V140 Z',
  cone: 'M34 140 L57 30 Q60 24 63 30 L86 140 Z',
  flame: 'M44 140 C34 112 40 78 60 22 C80 78 86 112 76 140 Z',
  ball: 'M56 140 V124 A26 26 0 1 1 64 124 V140 Z',
  needle: 'M54 140 L56 48 L60 16 L64 48 L66 140 Z',
  drop: 'M56 140 V132 C38 126 34 106 38 94 C44 72 56 50 60 26 C64 50 76 72 82 94 C86 106 82 126 64 132 V140 Z',
  'thin-cylinder': 'M52 140 V48 Q52 38 60 38 Q68 38 68 48 V140 Z',
};

const BASE = {
  metal: '#c9c2bb',
  metalDark: '#9c948c',
  ink: '#3a3330',
};

function MaterialPattern({ id, material, scale }: { id: string; material: MaterialId; scale: number }) {
  const s = scale;
  switch (material) {
    case 'diamond': {
      const size = 7 * s;
      return (
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <rect width={size} height={size} fill="#d8d1c9" />
          <circle cx={size * 0.25} cy={size * 0.3} r={0.9 * s} fill="#7d746c" />
          <circle cx={size * 0.72} cy={size * 0.62} r={1.1 * s} fill="#8a817a" />
          <circle cx={size * 0.45} cy={size * 0.88} r={0.7 * s} fill="#6f6760" />
        </pattern>
      );
    }
    case 'carbide': {
      const size = 9 * s;
      return (
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <rect width={size} height={size} fill="#b9b3ad" />
          <path d={`M0 0 L${size} ${size} M${size} 0 L0 ${size}`} stroke="#6d6660" strokeWidth={1.1 * Math.min(s, 1.3)} />
        </pattern>
      );
    }
    case 'ceramic': {
      const size = 8 * s;
      return (
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse" patternTransform="rotate(18)">
          <rect width={size} height={size} fill="#efe9e1" />
          <line x1={size / 2} y1="0" x2={size / 2} y2={size} stroke="#b8aea3" strokeWidth={1.4 * Math.min(s, 1.3)} />
        </pattern>
      );
    }
    case 'sanding-band': {
      const size = 5 * s;
      return (
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <rect width={size} height={size} fill="#c7ad8c" />
          <circle cx={size * 0.3} cy={size * 0.4} r={0.6 * s} fill="#8e7556" />
          <circle cx={size * 0.75} cy={size * 0.8} r={0.5 * s} fill="#9d8464" />
        </pattern>
      );
    }
    case 'silicone':
      return (
        <pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="#e3c7c4" />
        </pattern>
      );
  }
}

function Shank({ ringId, showRing }: { ringId: string; showRing: boolean }) {
  return (
    <g>
      <rect x="55" y="140" width="10" height="106" rx="2" fill={BASE.metal} stroke={BASE.metalDark} strokeWidth="1" />
      {showRing && (
        <g>
          <pattern id={ringId} width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="4" height="4" fill="#ece7e1" />
            <line x1="0" y1="0" x2="0" y2="4" stroke="#a69d94" strokeWidth="1.6" />
          </pattern>
          <rect x="54" y="152" width="12" height="9" fill={`url(#${ringId})`} stroke={BASE.metalDark} strokeWidth="0.8" />
        </g>
      )}
    </g>
  );
}

export default function BitSvg({ shape, material, grit, unverified, showRing = true, className, title, headOnly }: Props) {
  const uid = useId().replace(/:/g, '');
  const patId = `mat-${uid}`;
  const ringId = `ring-${uid}`;
  const scale = grit ? GRIT_SCALE[grit] : 1;
  const fill = material && !unverified ? `url(#${patId})` : '#e9e3dc';
  const stroke = unverified ? '#a69d94' : BASE.ink;
  const dash = unverified ? '4 3' : undefined;

  if (shape === 'brush-polish') {
    // 브러시 · 폴리싱 계열: 왼쪽 브러시, 오른쪽 실리콘 폴리셔 두 가지를 함께 표시
    return (
      <svg viewBox="0 0 160 250" className={className} role="img" aria-label={title ?? '브러시와 실리콘 폴리셔 도해'}>
        {title && <title>{title}</title>}
        <defs>
          <MaterialPattern id={patId} material="silicone" scale={1} />
        </defs>
        {/* 브러시 */}
        <g transform="translate(-20 0)">
          <rect x="52" y="104" width="16" height="40" rx="3" fill={BASE.metal} stroke={BASE.metalDark} />
          {Array.from({ length: 13 }).map((_, i) => {
            const x = 48 + i * 2;
            return <line key={i} x1={60 + (x - 60) * 0.5} y1="106" x2={x} y2="36" stroke="#8a7c70" strokeWidth="1.2" strokeLinecap="round" />;
          })}
          <Shank ringId={`${ringId}-a`} showRing={false} />
        </g>
        {/* 실리콘 폴리셔 */}
        <g transform="translate(40 0)">
          <path
            d="M44 140 V70 Q44 40 60 40 Q76 40 76 70 V140 Z"
            fill={unverified ? '#e9e3dc' : `url(#${patId})`}
            stroke={stroke}
            strokeDasharray={dash}
            strokeWidth="1.4"
          />
          <Shank ringId={`${ringId}-b`} showRing={false} />
        </g>
        <text x="40" y="22" textAnchor="middle" fontSize="10" fill="#7a6f68">
          브러시
        </text>
        <text x="100" y="30" textAnchor="middle" fontSize="10" fill="#7a6f68">
          실리콘 폴리셔
        </text>
      </svg>
    );
  }

  const isBand = material === 'sanding-band' && !unverified;

  return (
    <svg viewBox={headOnly ? '24 14 72 140' : '0 0 120 250'} className={className} role="img" aria-label={title ?? `${shape} 비트 도해`}>
      {title && <title>{title}</title>}
      <defs>{material && <MaterialPattern id={patId} material={material} scale={scale} />}</defs>
      <Shank ringId={ringId} showRing={showRing && !isBand} />
      {isBand ? (
        // 샌딩밴드: 만드렐(축) 위에 띠를 끼운 모습
        <g>
          <rect x="47" y="34" width="26" height="110" rx="4" fill="#9a8f86" stroke={BASE.ink} strokeWidth="1" />
          <path d={HEAD_PATHS[shape]} fill={fill} stroke={BASE.ink} strokeWidth="1.4" />
          <text x="60" y="160" textAnchor="middle" fontSize="8" fill="#7a6f68">
            만드렐
          </text>
        </g>
      ) : (
        <path d={HEAD_PATHS[shape]} fill={fill} stroke={stroke} strokeDasharray={dash} strokeWidth="1.4" />
      )}
      {shape === 'safety-barrel' && !unverified && (
        // 세이프티 배럴의 날 없는 윗면
        <path d="M40 54 Q40 40 54 40 H66 Q80 40 80 54 Z" fill="#f4efe9" stroke={BASE.ink} strokeWidth="1.4" />
      )}
      {unverified && (
        <text x="60" y="95" textAnchor="middle" fontSize="11" fill="#8a7f78">
          ?
        </text>
      )}
    </svg>
  );
}
