// 콘텐츠 데이터 타입 정의.
// UI 컴포넌트는 이 타입만 알고, 실제 문장·출처는 content/ 하위 데이터 파일에 둔다.

/** 출처 레지스트리 키 (sources.ts) */
export type SourceId = string;

export type SourceKind =
  | 'manufacturer' // 제조사 공식 자료(매뉴얼, 공식 가이드)
  | 'education' // 교육기관·교육자 자료
  | 'public' // 공공기관·의학 단체
  | 'retailer'; // 판매처 블로그(참고용, 우선순위 낮음)

export interface Source {
  id: SourceId;
  title: string;
  publisher: string;
  url: string;
  kind: SourceKind;
  /** 확인 일자 (YYYY-MM-DD) */
  accessed: string;
  /** 본문 확인 수준: 'full' = 본문을 읽고 확인, 'excerpt' = 검색 요약만 확인 */
  checked: 'full' | 'excerpt';
  note?: string;
}

/** 근거가 부족한 문장에 붙이는 표시 */
export interface Claim {
  text: string;
  sources?: SourceId[];
  /** true면 화면에 "출처 확인 필요" 배지를 표시 */
  needsSource?: boolean;
}

/** 이미지 자산 메타데이터 — 사진과 도해를 구분하고 이용 조건을 기록 */
export interface ImageAsset {
  id: string;
  kind: 'illustration' | 'photo';
  alt: string;
  /** 제작자/저작권자 */
  credit: string;
  license: string;
  /** 형태를 그릴 때 참고한 자료 */
  references: SourceId[];
  note?: string;
}

// ───── PART 1 ─────

export interface DrillPart {
  id: string;
  ko: string;
  en: string;
  /** 도해 위 핫스팟 위치 (viewBox 기준 좌표) */
  hotspot: { x: number; y: number };
  role: string;
  details: Claim[];
  sources: SourceId[];
}

export interface ConceptCard {
  id: string;
  title: string;
  term?: string; // 영문/전문 용어
  summary: string;
  points: Claim[];
}

export interface SafetyTopic {
  id: string;
  title: string;
  level: 'stop' | 'caution' | 'info';
  summary: string;
  points: Claim[];
}

// ───── PART 2 ─────

export type MaterialId = 'diamond' | 'ceramic' | 'carbide' | 'sanding-band' | 'silicone';
export type ShapeId =
  | 'straight-barrel'
  | 'tapered-barrel'
  | 'safety-barrel'
  | 'bullet'
  | 'cone'
  | 'flame'
  | 'ball'
  | 'needle'
  | 'drop'
  | 'thin-cylinder'
  | 'brush-polish';
export type GritId = 'extra-fine' | 'fine' | 'medium' | 'coarse' | 'extra-coarse';
export type TargetId = 'enhancement' | 'natural-surface' | 'nail-fold' | 'under-free-edge' | 'finishing';

/** 작동 방식: 연마(입자로 갈아냄) / 절삭(날로 깎아냄) / 폴리싱 */
export type Action = 'abrasive' | 'cutting' | 'polishing';

export interface Material {
  id: MaterialId;
  ko: string;
  en: string;
  action: Action[];
  summary: string;
  features: Claim[];
  uses: Claim[];
  pros: Claim[];
  limits: Claim[];
  beginnerCautions: Claim[];
  sources: SourceId[];
}

export interface Shape {
  id: ShapeId;
  ko: string;
  en: string;
  aliases: string[];
  form: string; // 생김새 한 줄
  features: Claim[];
  purposes: Claim[];
  targets: TargetId[];
  cautions: Claim[];
  /** 판매처·제조사별 명칭/형태 차이 */
  namingNote?: Claim;
  /** 자료에서 이 모양으로 확인된 재질 (모든 조합이 존재한다는 뜻 아님) */
  seenMaterials: MaterialId[];
  /** 큐티클·피부 주변 등 전문가 숙련이 필요한 작업이 주 용도인지 */
  proOnly: boolean;
  image: string; // ImageAsset id
  sources: SourceId[];
}

export interface Target {
  id: TargetId;
  ko: string;
  desc: string;
}

export interface GritLevel {
  id: GritId;
  ko: string;
  en: string;
  meaning: string;
  /** 시각화용 상대값 0~1 (실제 입자 크기 아님) */
  relative: number;
}

/** 확장 가능한 파트 레지스트리 */
export interface PartMeta {
  id: string;
  label: string;
  title: string;
  description: string;
  available: boolean;
}

// ───── PART 3 ─────

/** 정보의 성격: 개인 경험 기록 vs 조사한 일반 정보 */
export type Origin = 'personal' | 'research';

export interface PersonalStep {
  id: string;
  order: number;
  /** PART 2 도감과 연결할 모양 (니퍼처럼 비트가 아니면 없음) */
  shapeId?: ShapeId;
  tool: string;
  /** 내가 쓰는 설정 — 개인 기록이며 권장값 아님 */
  setting?: string;
  purpose: string;
  /** 아직 확인되지 않은 항목 */
  unverified: string[];
  /** 이 단계와 관련해 조사로 확인한 정보 */
  research: Claim[];
}

export interface Workflow {
  id: 'gel' | 'cuticle';
  title: string;
  summary: string;
  steps: PersonalStep[];
}

/** 손톱 위 이동 화살표. 좌표는 "드릴을 쓰는 사람 시점" 기준 도해 좌표계 */
export interface MovementArrow {
  id: number;
  from: [number, number];
  to: [number, number];
  /** 드릴을 쓰는 사람 눈에 보이는 방향 */
  label: string;
  /** 마주 앉은 사람 눈에 보이는 방향 */
  oppositeLabel: string;
}

/** 개인 기억 속 이동 방향 (검증되지 않음 → 정적 화살표로만 표시) */
export interface MyMovement {
  origin: Origin;
  rotation: 'F' | 'R';
  summary: string;
  note: Claim;
  arrows: MovementArrow[];
}
