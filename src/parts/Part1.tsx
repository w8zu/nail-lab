import SectionHeader from '../components/common/SectionHeader';
import WhatIsCards from '../components/part1/WhatIsCards';
import DrillExplorer from '../components/part1/DrillExplorer';
import ConceptTabs from '../components/part1/ConceptTabs';
import SafetyGrid from '../components/part1/SafetyGrid';

export default function Part1() {
  return (
    <section id="part1" className="part">
      <div className="container">
        <header className="part-header">
          <p className="part-label">PART 1</p>
          <h2>네일드릴 기초</h2>
          <p className="lead">드릴이 무엇인지, 어떻게 생겼는지, 무엇을 조심해야 하는지부터 알아봐요.</p>
        </header>

        <div className="section" id="p1-what">
          <SectionHeader index="1-1" title="네일드릴이란?" />
          <WhatIsCards />
        </div>

        <div className="section" id="p1-structure">
          <SectionHeader index="1-2" title="네일드릴의 구조" lead="번호를 누르면 각 부분의 이름과 하는 일이 나와요." />
          <DrillExplorer />
        </div>

        <div className="section" id="p1-basics">
          <SectionHeader index="1-3" title="기초 조작 개념" lead="숫자보다 원리가 먼저예요. 속도·방향·장착·열이 서로 어떻게 이어지는지 살펴봐요." />
          <ConceptTabs />
        </div>

        <div className="section" id="p1-safety">
          <SectionHeader index="1-4" title="기본 안전 수칙" lead="제목을 누르면 자세한 내용이 펼쳐져요." />
          <SafetyGrid />
        </div>
      </div>
    </section>
  );
}
