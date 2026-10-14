# NAIL LAB — 인터랙티브 네일드릴 가이드

셀프네일 경험자가 처음 네일드릴을 접할 때 도구 구조와 비트 차이를 시각적으로 익히는 개인용 교육 사이트.

- PART 1 네일드릴 기초 · PART 2 네일비트 종류와 용도 · PART 3 내가 쓰는 비트와 작업 방식
- 의료 조언이 아니며, 특정 RPM·압력·각도·시간을 권장하지 않습니다.

## 실행

```bash
npm install
npm run dev        # 로컬 개발 서버 (루트 경로 /)
npm run build      # dist/ 생성 (GitHub Pages용 /nail-lab/ 경로 기준)
npm run preview    # 빌드 결과 확인: /nail-lab/
```

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 빌드 후 GitHub Pages에 배포합니다.
저장소 Settings → Pages → Source는 **GitHub Actions**로 설정합니다.
저장소 이름을 바꾸면 `vite.config.ts`의 `base`도 함께 바꿔야 합니다.

## 구조

```
src/
  content/            ← 문장·출처·이미지 메타데이터 (UI와 분리)
    types.ts          타입 정의 (재질·모양·입도는 서로 독립된 속성)
    sources.ts        근거 자료 레지스트리 (확인일, 본문/요약 확인 수준)
    images.ts         이미지 레지스트리 (도해/사진 구분, 제작자, 이용 조건)
    parts.ts          파트 레지스트리
    part1/            드릴 구조·핫스팟, 기초 개념, 안전 수칙
    part2/            재질, 모양 11종, 입도
    part3/            개인 작업 흐름·원칙, 회전/이동 방향
  components/         ← 화면 컴포넌트
  parts/Part1~3.tsx   파트 화면
  App.tsx             PART_VIEWS에 파트 화면 연결
```

## 콘텐츠 원칙

- 모든 문장은 `Claim { text, sources?, needsSource? }`. 근거가 없으면 `needsSource: true` → 화면에 "출처 확인 필요" 배지.
- `Shape.seenMaterials`에는 조사 자료에서 실제로 확인된 재질만 기록. 나머지 조합은 "자료 미확인"(점선)으로 표시.
- 외부 제품 사진은 이용 허가를 확인하지 못해 사용하지 않음. 모든 그림은 자체 제작 SVG.
  허가받은 사진을 추가할 때는 `images.ts`에 `kind: 'photo'`와 credit/license를 기록.

## PART 3 (개인 작업 방식)

- 각 단계는 `나의 방식`(개인 기록)과 `조사한 정보`(출처 있는 Claim)를 분리해서 보관·표시
- 개인 기록의 RPM 등 수치는 "개인 기록 · 권장값 아님" 배지와 함께만 표시
- 방향은 모두 "드릴을 쓰는 사람이 손톱을 내려다보는 시점" 기준. 개인 기억 속 이동 방향은 정적인 점선 + "추가 확인 필요"로만 표시
- PART 3 → PART 2 연결: `components/part2/bitLink.ts`의 `openBit(shapeId)`가 도감 상세 모달을 연다

## 새 파트 추가 방법

1. `src/content/<part>/`에 데이터 작성
2. `src/parts/PartN.tsx` 작성 후 `App.tsx`의 `PART_VIEWS`에 연결
3. `content/parts.ts`에 등록하고 `available: true`
