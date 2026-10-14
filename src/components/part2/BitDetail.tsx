import { useCallback, useEffect, useState } from 'react';
import type { GritId, MaterialId, Shape } from '../../content/types';
import { MATERIALS, TARGET_MAP } from '../../content/part2/materials';
import { GRITS } from '../../content/part2/grit';
import BitSvg from '../illustrations/BitSvg';
import Modal from '../common/Modal';
import ClaimList, { ClaimText, SourceRefs } from '../common/ClaimList';
import ImageCredit from '../common/ImageCredit';

interface Props {
  list: Shape[];
  index: number | null;
  onIndex: (i: number) => void;
  onClose: () => void;
}

export default function BitDetail({ list, index, onIndex, onClose }: Props) {
  const shape = index !== null ? list[index] : null;
  const [material, setMaterial] = useState<MaterialId | null>(null);
  const [grit, setGrit] = useState<GritId>('medium');
  const [zoom, setZoom] = useState(false);

  // 모양이 바뀌면 자료에서 확인된 첫 재질로 초기화
  useEffect(() => {
    if (shape) setMaterial(shape.seenMaterials[0] ?? null);
    setZoom(false);
  }, [shape]);

  const go = useCallback(
    (d: number) => {
      if (index === null) return;
      onIndex((index + d + list.length) % list.length);
    },
    [index, list.length, onIndex],
  );

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    },
    [go],
  );

  if (!shape) return null;
  const unverified = material !== null && !shape.seenMaterials.includes(material);
  const prev = list[(index! - 1 + list.length) % list.length];
  const next = list[(index! + 1) % list.length];

  return (
    <Modal open onClose={onClose} labelledBy="bit-detail-title" onKey={onKey}>
      <div className="detail">
        <div className="detail-figure">
          <button className={`zoom-box ${zoom ? 'is-zoom' : ''}`} onClick={() => setZoom((z) => !z)} aria-label={zoom ? '축소' : '머리 부분 확대'}>
            <BitSvg shape={shape.id} material={material} grit={grit} unverified={unverified} className="detail-svg" title={`${shape.ko} 도해`} />
            <span className="zoom-hint">{zoom ? '축소' : '확대'}</span>
          </button>
          <ImageCredit id={shape.image} />

          {shape.id !== 'brush-polish' && (
            <>
              <fieldset className="picker">
                <legend>재질 바꿔 보기</legend>
                <div className="picker-row">
                  {MATERIALS.map((m) => {
                    const seen = shape.seenMaterials.includes(m.id);
                    return (
                      <button key={m.id} className={`chip ${material === m.id ? 'is-active' : ''} ${seen ? '' : 'is-unseen'}`} aria-pressed={material === m.id} onClick={() => setMaterial(m.id)}>
                        {m.ko.split(' ')[0]}
                        {seen ? ' ✓' : ''}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <fieldset className="picker">
                <legend>입도 (무늬 크기)</legend>
                <div className="picker-row">
                  {GRITS.map((g) => (
                    <button key={g.id} className={`chip small ${grit === g.id ? 'is-active' : ''}`} aria-pressed={grit === g.id} onClick={() => setGrit(g.id)}>
                      {g.en}
                    </button>
                  ))}
                </div>
              </fieldset>
              <p className="combo-note">
                {unverified ? (
                  <>
                    <strong>조사한 자료에서는 이 조합을 찾지 못했어요.</strong> 실제로 팔지 않거나 드문 조합일 수 있어서 점선으로만 그렸어요.
                  </>
                ) : (
                  <>✓ 표시는 조사한 자료에서 이 모양으로 확인한 재질이에요. 같은 모양이라도 재질에 따라 하는 일이 달라져요.</>
                )}
              </p>
            </>
          )}
        </div>

        <div className="detail-body">
          <p className="eyebrow">
            {String(index! + 1).padStart(2, '0')} / {list.length} · {shape.en}
          </p>
          <h3 id="bit-detail-title">{shape.ko}</h3>
          {shape.aliases.length > 0 && <p className="aliases">다른 이름: {shape.aliases.join(', ')}</p>}
          {shape.proOnly && (
            <p className="pro-warning">
              <span className="badge badge-pro">전문가 작업 영역</span> 주로 큐티클이나 손톱 주변 피부에 쓰는 비트예요. 초보자가 따라 하는 건 권하지 않아요.
            </p>
          )}

          <dl className="attr-list">
            <div>
              <dt>모양</dt>
              <dd>{shape.form}</dd>
            </div>
            <div>
              <dt>재질 선택지</dt>
              <dd>
                {shape.seenMaterials.map((m) => MATERIALS.find((x) => x.id === m)!.ko).join(' · ')}
                <span className="muted"> (조사한 자료에서 확인한 것)</span>
              </dd>
            </div>
            <div>
              <dt>작업 대상</dt>
              <dd className="target-tags">
                {shape.targets.map((t) => (
                  <span key={t} className={`tag target-${t}`} title={TARGET_MAP[t].desc}>
                    {TARGET_MAP[t].ko}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <section>
            <h5>생김새의 특징</h5>
            <ClaimList claims={shape.features} />
          </section>
          <section>
            <h5>주로 쓰는 곳</h5>
            <ClaimList claims={shape.purposes} />
          </section>
          <section className="is-caution">
            <h5>주의할 점</h5>
            <ClaimList claims={shape.cautions} />
          </section>
          {shape.namingNote && (
            <section className="naming">
              <h5>이름과 모양이 판매처마다 다를 수 있어요</h5>
              <p>
                <ClaimText claim={shape.namingNote} />
              </p>
            </section>
          )}
          <p className="panel-src">
            근거 <SourceRefs ids={shape.sources} />
          </p>
        </div>
      </div>

      <nav className="detail-nav" aria-label="비트 이동">
        <button onClick={() => go(-1)}>← {prev.ko}</button>
        <span className="muted">키보드 ← → 로도 넘길 수 있어요</span>
        <button onClick={() => go(1)}>{next.ko} →</button>
      </nav>
    </Modal>
  );
}
