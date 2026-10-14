import { useState } from 'react';
import { ACTION_LABEL, MATERIALS } from '../../content/part2/materials';
import type { MaterialId } from '../../content/types';
import BitSvg from '../illustrations/BitSvg';
import ClaimList, { SourceRefs } from '../common/ClaimList';

const GROUPS = [
  { key: 'features', label: '특징' },
  { key: 'uses', label: '주로 쓰는 작업' },
  { key: 'pros', label: '장점' },
  { key: 'limits', label: '아쉬운 점' },
  { key: 'beginnerCautions', label: '초보자 주의' },
] as const;

export default function MaterialExplorer() {
  const [id, setId] = useState<MaterialId>('diamond');
  const m = MATERIALS.find((x) => x.id === id)!;
  return (
    <div className="material-explorer">
      <div className="material-tabs" role="tablist" aria-label="재질 선택">
        {MATERIALS.map((x) => (
          <button key={x.id} role="tab" aria-selected={id === x.id} className={`material-tab ${id === x.id ? 'is-active' : ''}`} onClick={() => setId(x.id)}>
            <BitSvg shape={x.id === 'silicone' ? 'thin-cylinder' : 'straight-barrel'} material={x.id} showRing={false} headOnly className="material-thumb" title={`${x.ko} 표면 도해`} />
            <span className="material-name">{x.ko}</span>
            <span className="material-en">{x.en}</span>
          </button>
        ))}
      </div>

      <div className="material-panel card" role="tabpanel" key={m.id}>
        <div className="material-head">
          <div>
            <p className="eyebrow">{m.en}</p>
            <h4>{m.ko}</h4>
            <p className="panel-role">{m.summary}</p>
          </div>
          <div className="action-tags">
            {m.action.map((a) => (
              <span key={a} className={`tag tag-${a}`}>
                {ACTION_LABEL[a]}
              </span>
            ))}
          </div>
        </div>
        <div className="material-grid">
          {GROUPS.map((g) => (
            <section key={g.key} className={`material-group ${g.key === 'beginnerCautions' ? 'is-caution' : ''}`}>
              <h5>{g.label}</h5>
              <ClaimList claims={m[g.key]} />
            </section>
          ))}
        </div>
        <p className="panel-src">
          근거 <SourceRefs ids={m.sources} />
        </p>
        <p className="visual-note">왼쪽 그림의 표면 무늬는 재질을 구분하려고 넣은 표시예요. 실제 질감을 그대로 그린 건 아니에요.</p>
      </div>
    </div>
  );
}
