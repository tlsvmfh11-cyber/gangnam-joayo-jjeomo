# 강남 좋아요 쩜오 랜딩페이지

> 유흥업종 멀티 랜딩페이지 전문 제작 - SEO 최적화 프리미엄 프로젝트

## 🎯 프로젝트 개요

강남 좋아요 쩜오 키워드를 타겟으로 하는 SEO 최적화 멀티 랜딩페이지입니다.
CLAUDE.md 규정에 따라 제작되었으며, 화려한 디자인과 최고 수준의 SEO를 적용했습니다.

## ✨ 주요 특징

### 디자인
- **컨셉**: 프리미엄 룸살롱 감성
- **컬러**: 차콜그레이 + 샴페인골드
- **효과**: 골드 그라데이션, 글래스모피즘, 파티클 배경
- **레이아웃**: 풀스크린 히어로 + 지그재그 흐름

### SEO 최적화
- ✅ Title 태그 최적화 (55-60자)
- ✅ Meta Description 150자 이상
- ✅ H1 1개 / H2-H3 체계적 구조
- ✅ FAQ 섹션 5문항 이상
- ✅ Schema.org JSON-LD (FAQPage, LocalBusiness, Organization, Breadcrumb)
- ✅ 모바일 최적화
- ✅ 페이지당 3,000자 이상 콘텐츠

### 보안
- 우클릭 방지
- 드래그/선택 방지 (`user-select: none`)
- 개발자 도구 차단 (F12, Ctrl+U 등)
- 이미지 드래그 방지

## 🛠 기술 스택

### Core
- React 19
- Vite
- TypeScript
- React Router DOM v6

### 스타일링
- Tailwind CSS v3
- PostCSS
- Autoprefixer

### 애니메이션
- Framer Motion (페이지 전환, 요소 애니메이션)
- AOS (Animate On Scroll)
- tsParticles (파티클 효과)

### UI 라이브러리
- Swiper (슬라이더)
- React Icons (아이콘)
- Headless UI (접근성 컴포넌트)

### SEO
- React Helmet Async (동적 메타태그)
- sitemap.xml
- robots.txt

## 📁 프로젝트 구조

```
kangnam-joayo-jjeomo/
├── public/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── SystemSection.tsx
│   │   ├── PriceSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ParticlesBackground.tsx
│   │   └── SchemaMarkup.tsx
│   ├── hooks/
│   │   └── useContentProtection.tsx
│   ├── pages/
│   │   └── HomePage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

## 🚀 시작하기

### 설치

```bash
npm install --legacy-peer-deps
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 📄 페이지 구조

- **메인 페이지** (`/`): 강남 좋아요 쩜오 전체 소개
- **가격 페이지** (`/price`): 요금제 상세 (준비중)
- **후기 페이지** (`/reviews`): 실제 이용 후기 (준비중)
- **정보 페이지** (`/info`): 위치, 영업시간, 예약 (준비중)
- **시스템 페이지** (`/system`): 초이스, 이용 절차 (준비중)

## 🎨 디자인 가이드

### 컬러 팔레트

```css
Primary: #1a1a1a (차콜 블랙)
Secondary: #d4af37 (샴페인 골드)
Accent: #2a2a2a (다크 그레이)
Light: #f5f5dc (크림 베이지)
Gold Light: #ffd700
Gold Dark: #b8930c
```

### 주요 클래스

- `.text-gold-gradient`: 골드 그라데이션 텍스트
- `.glass-card`: 글래스모피즘 카드
- `.shadow-gold-glow`: 골드 글로우 효과
- `.bg-gold-gradient`: 골드 그라데이션 배경

## 📊 SEO 체크리스트

- [x] Title 태그 최적화
- [x] Meta description 150자 이상
- [x] H1 태그 1개
- [x] H2-H3 구조화
- [x] FAQ 5문항 이상
- [x] Schema.org JSON-LD
- [x] 모바일 반응형
- [x] 페이지 로딩 최적화
- [x] 이미지 최적화
- [x] 내부 링크 구조

## 🔒 보안 기능

`useContentProtection` 훅이 자동으로 적용됩니다:

- 우클릭 차단
- 개발자 도구 차단
- 텍스트 선택 차단
- 이미지 드래그 차단
- 소스 보기 차단

## 📝 라이선스

Proprietary - SEO 랜딩팩토리

## 👥 제작

**작업 프로세스**: PM → SEO 전략 → DESIGN → SEO 세부 (5개 전문가) → COPY → DEV → QA

**AI 직원 구성**:
- PM (프로젝트 매니저)
- SEO 전략가
- DESIGN 팀
- SEO 세부 전문가 5명 (SERP, Schema, 내부링크, 중복방지, E-E-A-T)
- COPY 카피라이터
- DEV 개발자
- QA 품질 관리

---

**Made with ❤️ by Claude Code**
