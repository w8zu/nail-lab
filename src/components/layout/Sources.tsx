import { SOURCES, SOURCE_KIND_LABEL } from '../../content/sources';
import { IMAGES } from '../../content/images';

export default function Sources() {
  return (
    <section id="sources" className="part sources">
      <div className="container">
        <header className="part-header">
          <p className="part-label">REFERENCES</p>
          <h2>참고 자료와 출처</h2>
          <p className="lead">
            본문의 작은 번호를 누르면 아래 자료로 이동해요. 공식 제조사 자료와 공공·의학 자료를 먼저 참고했고, 판매처 블로그는 보조 근거로만 썼어요.
            <span className="badge badge-unverified">출처 확인 필요</span> 표시는 공식 자료에서 직접 확인하지 못한 일반적인 설명이에요.
          </p>
        </header>

        <ol className="source-list">
          {SOURCES.map((s) => (
            <li key={s.id} id={`src-${s.id}`}>
              <div className="source-meta">
                <span className={`badge kind-${s.kind}`}>{SOURCE_KIND_LABEL[s.kind]}</span>
                <span className={`badge ${s.checked === 'full' ? 'checked-full' : 'checked-excerpt'}`}>{s.checked === 'full' ? '본문 확인' : '요약만 확인'}</span>
              </div>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="source-title">
                {s.title}
              </a>
              <p className="source-pub">
                {s.publisher} · 확인일 {s.accessed}
              </p>
              {s.note && <p className="source-note">{s.note}</p>}
            </li>
          ))}
        </ol>

        <h3 className="sub-title">이미지 출처와 이용 조건</h3>
        <p className="lead small">
          조사한 제조사 사이트의 제품 사진은 다시 써도 되는지(재배포 허가) 확인할 수 없어서 쓰지 않았어요. 이 사이트의 그림은 모두 위 자료의 설명과 제조사가 공개한 사진의 모양을 참고해서 새로 그린 단순한 도해예요. 실제 제품과 비율이나 세부가 다를 수 있어요.
        </p>
        <div className="matrix-scroll">
          <table className="image-table">
            <thead>
              <tr>
                <th scope="col">그림</th>
                <th scope="col">구분</th>
                <th scope="col">제작 · 이용 조건</th>
                <th scope="col">참고 자료</th>
              </tr>
            </thead>
            <tbody>
              {IMAGES.map((img) => (
                <tr key={img.id}>
                  <td>{img.alt}</td>
                  <td>
                    <span className={`badge ${img.kind === 'photo' ? 'badge-photo' : 'badge-illust'}`}>{img.kind === 'photo' ? '실제 사진' : '설명용 도해'}</span>
                  </td>
                  <td>
                    {img.credit}
                    <br />
                    <span className="muted small">{img.license}</span>
                  </td>
                  <td>
                    {img.references.map((r) => (
                      <a key={r} href={`#src-${r}`} className="ref">
                        {SOURCES.findIndex((s) => s.id === r) + 1}
                      </a>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
