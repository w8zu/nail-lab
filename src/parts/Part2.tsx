import SectionHeader from '../components/common/SectionHeader';
import MaterialExplorer from '../components/part2/MaterialExplorer';
import BitGallery from '../components/part2/BitGallery';
import BitCompare from '../components/part2/BitCompare';
import GritVisualizer from '../components/part2/GritVisualizer';

export default function Part2() {
  return (
    <section id="part2" className="part part-alt">
      <div className="container">
        <header className="part-header">
          <p className="part-label">PART 2</p>
          <h2>네일비트 종류와 용도</h2>
          <p className="lead">비트 하나는 세 가지 특징이 합쳐진 거예요. 이름이 비슷해 보여도 셋 중 하나만 달라지면 하는 일이 달라져요.</p>
        </header>

        <div className="equation" aria-label="비트 = 재질 × 모양 × 입도">
          <div className="eq-item">
            <span className="eq-key">재질</span>
            <span className="muted">무엇으로 만들었는지</span>
          </div>
          <span className="eq-op">×</span>
          <div className="eq-item">
            <span className="eq-key">모양</span>
            <span className="muted">어디에 닿기 좋게 생겼는지</span>
          </div>
          <span className="eq-op">×</span>
          <div className="eq-item">
            <span className="eq-key">입도</span>
            <span className="muted">얼마나 곱거나 거친지</span>
          </div>
          <span className="eq-op">=</span>
          <div className="eq-item eq-result">
            <span className="eq-key">비트 1개</span>
            <span className="muted">예: 카바이드 · 세이프티 배럴 · Medium</span>
          </div>
        </div>

        <div className="section" id="p2-material">
          <SectionHeader index="2-A" title="재질별 분류" lead="재질에 따라 손톱을 갈아내는 방식이 달라져요." />
          <MaterialExplorer />
        </div>

        <div className="section" id="p2-shape">
          <SectionHeader index="2-B" title="모양별 비트 도감" lead="카드를 누르면 크게 본 그림과 용도, 주의할 점이 나와요. 상세 화면에서는 재질도 바꿔 볼 수 있어요." />
          <BitGallery />
        </div>

        <div className="section" id="p2-compare">
          <SectionHeader index="2-B+" title="두 비트 나란히 비교" lead="비슷해 보이는 비트 두 개를 골라서 차이를 확인해 보세요. 모양과 재질을 따로 고를 수 있어요." />
          <BitCompare />
        </div>

        <div className="section" id="p2-grit">
          <SectionHeader index="2-C" title="입도 (Grit)" lead="입도(그릿)는 비트 표면이 얼마나 곱거나 거친지를 나타내는 기준이에요. 슬라이더를 움직여서 거칠기에 따라 표면과 남는 자국이 어떻게 달라지는지 보세요." />
          <GritVisualizer />
        </div>
      </div>
    </section>
  );
}
