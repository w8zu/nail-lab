import { SourceRefs } from '../common/ClaimList';
import ImageCredit from '../common/ImageCredit';

// "총알 비트"와 헷갈리기 쉬운 모양 비교 실루엣 (자료 설명 기반 단순화 도해)
const ITEMS = [
  {
    id: 'bullet',
    name: '불릿',
    en: 'Bullet / Rounded Barrel',
    path: 'M40 140 V64 C40 40 50 28 60 28 C70 28 80 40 80 64 V140 Z',
    desc: '원통에 끝이 둥글어요. 제품 표면 작업용이에요.',
    sources: ['thenailwiki-bits'],
  },
  {
    id: 'rounded-cone',
    name: '라운드 콘',
    en: 'Rounded Cone',
    path: 'M36 140 L53 44 Q60 26 67 44 L84 140 Z',
    desc: '원뿔인데 끝이 덜 뾰족해요.',
    sources: ['efilebits-guide'],
  },
  {
    id: 'football',
    name: '풋볼',
    en: 'Football',
    path: 'M60 26 C84 52 84 112 64 140 H56 C36 112 36 52 60 26 Z',
    desc: '타원형이에요. 주로 손톱 밑 작업용으로 설명돼요.',
    sources: ['nailsmag-bits'],
  },
  {
    id: 'tapered',
    name: '테이퍼드 배럴',
    en: 'Tapered Barrel',
    path: 'M38 140 L45 42 Q46 38 50 38 H70 Q74 38 75 42 L82 140 Z',
    desc: '끝으로 갈수록 살짝 가늘어지는 원통이에요.',
    sources: ['thenailwiki-bits'],
  },
];

export default function BulletFamily() {
  return (
    <figure className="bullet-family card">
      <div className="family-grid">
        {ITEMS.map((it) => (
          <div key={it.id} className={`family-item ${it.id === 'bullet' ? 'is-main' : ''}`}>
            <svg viewBox="24 14 72 140" className="family-svg" role="img" aria-label={`${it.name} 실루엣`}>
              <rect x="55" y="140" width="10" height="20" fill="#cfc8c0" stroke="#9c948c" />
              <path d={it.path} fill="#e9e3dc" stroke="#3a3330" strokeWidth="1.4" />
            </svg>
            <strong>{it.name}</strong>
            <span className="bit-en">{it.en}</span>
            <p>
              {it.desc}
              <SourceRefs ids={it.sources} />
            </p>
          </div>
        ))}
      </div>
      <figcaption>
        <ImageCredit id="svg-bullet-family" />
      </figcaption>
    </figure>
  );
}
