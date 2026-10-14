import { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ClaimList, { ClaimText } from '../components/common/ClaimList';
import OriginBadge from '../components/part3/OriginBadge';
import WorkflowTrack from '../components/part3/WorkflowTrack';
import BulletFamily from '../components/part3/BulletFamily';
import DirectionExplorer from '../components/part3/DirectionExplorer';
import { CUTICLE_WARNINGS, GEL_PRINCIPLES, GEL_SAFETY, PART3_NOTICE, WORKFLOWS } from '../content/part3/workflows';

export default function Part3() {
  const [track, setTrack] = useState<'gel' | 'cuticle'>('gel');
  const flow = WORKFLOWS.find((w) => w.id === track)!;

  return (
    <section id="part3" className="part">
      <div className="container">
        <header className="part-header">
          <p className="part-label">PART 3</p>
          <h2>내가 사용하는 네일비트와 작업 방식</h2>
          <p className="lead">네일숍에서 배워서 지금 제가 쓰는 방식을 적고, 관련해서 찾아본 정보를 옆에 붙였어요.</p>
        </header>

        <div className="notice part3-notice">
          <strong>읽기 전에</strong>
          <p>{PART3_NOTICE}</p>
        </div>

        <div className="origin-legend">
          <div>
            <OriginBadge origin="personal" />
            <p>제가 배우고 쓰는 방식이에요. 제 기억과 경험을 적은 기록이고, 표준 시술법이 아니에요. 적힌 숫자도 권장값이 아니에요.</p>
          </div>
          <div>
            <OriginBadge origin="research" />
            <p>제조사 문서, 교육 자료, 의학 자료에서 확인한 일반 정보예요. 문장 끝의 번호를 누르면 출처를 볼 수 있어요.</p>
          </div>
        </div>

        <div className="section" id="p3-flows">
          <SectionHeader index="3-1" title="작업 흐름" lead="젤 제거와 큐티클 케어를 나눠서 보여 드려요. 비트 이름 아래 링크를 누르면 PART 2 도감의 상세 정보가 열려요." />

          <div className="track-switch" role="tablist" aria-label="작업 종류">
            {WORKFLOWS.map((w) => (
              <button key={w.id} role="tab" aria-selected={track === w.id} className={`track-btn track-btn-${w.id} ${track === w.id ? 'is-active' : ''}`} onClick={() => setTrack(w.id)}>
                <strong>{w.title}</strong>
                <span>{w.summary}</span>
              </button>
            ))}
          </div>

          <div className="track-body" key={track}>
            {track === 'cuticle' && (
              <article className="card safety level-stop cuticle-warning">
                <div className="safety-head static">
                  <span className="badge level-badge level-stop">따라 하지 마세요</span>
                  <span className="safety-title">아래는 실습 안내가 아니라 제가 배운 흐름을 적어 둔 기록이에요</span>
                </div>
                <ClaimList claims={CUTICLE_WARNINGS} />
              </article>
            )}

            <WorkflowTrack flow={flow} />

            {track === 'gel' && (
              <>
                <h4 className="sub-title">젤 제거에서 제가 가장 중요하게 생각하는 원칙</h4>
                <ol className="principles">
                  {GEL_PRINCIPLES.map((p, i) => (
                    <li key={i} className="card principle">
                      <span className="principle-num">{i + 1}</span>
                      <div>
                        <p className="principle-personal">
                          <OriginBadge origin="personal" /> {p.personal}
                        </p>
                        {p.research && (
                          <p className="principle-research">
                            <OriginBadge origin="research" /> <ClaimText claim={p.research} />
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
                <article className="card safety level-caution gel-safety">
                  <div className="safety-head static">
                    <span className="badge level-badge level-caution">안전 안내</span>
                    <span className="safety-title">원칙을 지킨다고 안전이 보장되지는 않아요</span>
                  </div>
                  <ClaimList claims={GEL_SAFETY} />
                </article>

                <h4 className="sub-title">"총알 비트"의 정확한 이름은?</h4>
                <p className="lead small">제가 생김새를 보고 부르는 이름이라, 공식 이름은 아직 정하지 않았어요. 비슷해 보이는 모양들을 자료를 기준으로 비교해 봤어요. 실제 비트 사진으로 확인해야 해요.</p>
                <BulletFamily />
              </>
            )}
          </div>
        </div>

        <div className="section" id="p3-direction">
          <SectionHeader
            index="3-2"
            title="회전 방향과 이동 방향"
            lead="비트가 도는 방향과 손으로 옮기는 방향은 서로 다른 개념이에요. 여기서 말하는 방향은 모두 드릴을 쓰는 사람 시점이에요. 시술 연습용이 아니라 개념을 이해하기 위한 그림이에요."
          />
          <DirectionExplorer />
        </div>
      </div>
    </section>
  );
}
