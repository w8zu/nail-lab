import type { Workflow } from '../../content/types';
import { SHAPES } from '../../content/part2/shapes';
import BitSvg from '../illustrations/BitSvg';
import ClaimList from '../common/ClaimList';
import { openBit } from '../part2/bitLink';
import OriginBadge from './OriginBadge';

// 작업 흐름 타임라인. 각 단계는 "나의 방식"(위)과 "조사한 정보"(아래)를 한 카드 안에서 나눠 보여준다.
export default function WorkflowTrack({ flow }: { flow: Workflow }) {
  return (
    <ol className={`timeline track-${flow.id}`}>
      {flow.steps.map((st) => {
        const shape = st.shapeId ? SHAPES.find((s) => s.id === st.shapeId) : undefined;
        return (
          <li key={st.id} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true">
              {st.order}
            </span>
            <article className="card step-card">
              <div className="step-head">
                <div className="step-figure">
                  {st.shapeId ? <BitSvg shape={st.shapeId} material={null} showRing={false} headOnly className="step-svg" title={`${st.tool} 실루엣`} /> : <NipperIcon />}
                </div>
                <div>
                  <p className="eyebrow">STEP {st.order}</p>
                  <h4>{st.tool}</h4>
                  {shape && (
                    <button className="text-btn link-btn" onClick={() => openBit(shape.id)}>
                      PART 2 도감: {shape.ko} 보기 →
                    </button>
                  )}
                </div>
              </div>

              <section className="step-personal">
                <OriginBadge origin="personal" />
                <p>{st.purpose}</p>
                {st.setting && (
                  <p className="setting">
                    <span className="setting-label">제가 쓰는 설정</span>
                    <strong>{st.setting}</strong>
                    <span className="badge badge-record">개인 기록 · 권장값 아님</span>
                  </p>
                )}
                {st.unverified.length > 0 && (
                  <ul className="unverified-list">
                    {st.unverified.map((u) => (
                      <li key={u}>
                        <span className="badge badge-unverified">확인 필요</span> {u}
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section className="step-research">
                <OriginBadge origin="research" />
                <ClaimList claims={st.research} />
              </section>
            </article>
          </li>
        );
      })}
    </ol>
  );
}

function NipperIcon() {
  // 큐티클 니퍼 단순 실루엣 (설명용)
  return (
    <svg viewBox="0 0 80 140" className="step-svg" role="img" aria-label="큐티클 니퍼 실루엣">
      <path d="M36 20 Q34 8 40 6 Q46 8 44 20 L42 56 H38 Z" fill="#cfc8c0" stroke="#3a3330" strokeWidth="1.4" />
      <circle cx="40" cy="62" r="5" fill="#e9e3dc" stroke="#3a3330" strokeWidth="1.4" />
      <path d="M37 66 Q24 96 22 132" fill="none" stroke="#3a3330" strokeWidth="4" strokeLinecap="round" />
      <path d="M43 66 Q56 96 58 132" fill="none" stroke="#3a3330" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 100 Q40 92 50 100" fill="none" stroke="#9c948c" strokeWidth="2" />
    </svg>
  );
}
