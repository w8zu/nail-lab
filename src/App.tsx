import { useEffect, type ComponentType } from 'react';
import { PARTS } from './content/parts';
import Header from './components/layout/Header';
import Sources from './components/layout/Sources';
import Part1 from './parts/Part1';
import Part2 from './parts/Part2';
import Part3 from './parts/Part3';

// 파트 id → 화면. 새 파트는 parts/에 화면을 추가해 여기에 연결하고
// content/parts.ts에서 available: true로 두면 내비게이션에 자동으로 나타난다.
const PART_VIEWS: Record<string, ComponentType> = {
  part1: Part1,
  part2: Part2,
  part3: Part3,
};

export default function App() {
  // #part1 같은 직접 링크로 들어오면 브라우저가 화면이 그려지기 전에 위치를 찾지 못하므로,
  // 첫 렌더링 뒤와 웹 폰트 로딩 뒤(글꼴이 바뀌며 높이가 달라짐)에 한 번 더 해당 위치로 이동한다.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    let cancelled = false;
    const go = () => !cancelled && document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' });
    const stop = () => (cancelled = true);
    go();
    window.addEventListener('wheel', stop, { once: true, passive: true });
    window.addEventListener('touchstart', stop, { once: true, passive: true });
    document.fonts?.ready.then(go);
    return () => {
      cancelled = true;
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
    };
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <p className="part-label">SELF NAIL · E-FILE GUIDE</p>
            <h1>
              처음 만나는
              <br />
              네일드릴
            </h1>
            <p className="hero-lead">셀프 젤네일은 해 봤지만 드릴은 처음인 분을 위한 그림 가이드예요. 드릴이 어떻게 생겼는지, 비슷해 보이는 비트들이 어떻게 다른지 직접 눌러 보면서 알아봐요.</p>
            <div className="hero-cards">
              {PARTS.filter((p) => p.available).map((p) => (
                <a key={p.id} href={`#${p.id}`} className="hero-card">
                  <span className="nav-label">{p.label}</span>
                  <strong>{p.title}</strong>
                  <span className="muted">{p.description}</span>
                </a>
              ))}
            </div>
            <div className="notice">
              <strong>먼저 알아 두세요</strong>
              <p>
                이 가이드는 도구를 <em>이해</em>하기 위한 자료예요. 큐티클이나 손톱 주변 피부를 드릴로 다루는 건 전문 교육이 필요한 작업이라 따라 하는 걸 권하지 않아요. 특정 속도(RPM: 비트가 1분 동안 도는 횟수)·압력·각도·시간도 권하지 않아요. PART 3에 나오는 숫자는 제 개인 기록이에요. 기기와 비트는 각 제조사 설명서를 따라 주세요.
              </p>
            </div>
          </div>
        </section>

        {PARTS.filter((p) => p.available && PART_VIEWS[p.id]).map((p) => {
          const View = PART_VIEWS[p.id];
          return <View key={p.id} />;
        })}

        <Sources />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>NAIL LAB · 개인 교육용 가이드</p>
          <p className="muted small">이 사이트는 의료 조언이 아니에요. 손톱이나 피부에 이상이 있으면 피부과 전문의와 상담하세요.</p>
        </div>
      </footer>
    </>
  );
}
