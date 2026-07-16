# CSWEB ERP 광고 랜딩페이지 적용 안내

## 제작 페이지

| 광고 카테고리 | 배포 URL | 주요 광고 키워드 |
|---|---|---|
| 중소기업 통합 ERP | `/erp-small-business/` | 중소기업 ERP, 웹 ERP, ERP 가격, ERP 무료체험 |
| 제조업 ERP | `/manufacturing-erp/` | 제조업 ERP, 생산관리 프로그램, BOM 관리, 외주관리 |
| 재고관리 ERP | `/inventory-management/` | 재고관리 프로그램, 입출고 관리, 원재료 재고, 월별 재고 |
| 회계관리 ERP | `/accounting-erp/` | 중소기업 회계 ERP, 전표 관리, 거래처 원장, 시산표 |

## 공통 반영 내용

- 기존 홈페이지의 Bootstrap·Pretendard·블루 계열 디자인 유지
- PC·태블릿·모바일 반응형 구성
- 카테고리별 제목, 설명, 기능, 업무 흐름, FAQ 최적화
- 실제 제품 화면으로 오해되지 않도록 히어로 영역을 업무 흐름 구성도로 표현
- 가입비 0원, 월 44,000원, 1개월 무료체험 중심의 단일 요금 카드 반영
- SEO title, description, canonical, Open Graph, SoftwareApplication 구조화 데이터
- 사이트맵에 랜딩페이지 4개 추가
- 메인 홈페이지 푸터에 랜딩페이지 내부 링크 추가
- 모바일 하단 무료체험 고정 버튼 제공


## 2026-07-14 수정 내용

- 히어로 오른쪽의 가상 대시보드형 화면을 페이지별 업무 흐름 구성도로 교체
- 구성도 하단에 실제 ERP 화면이 아닌 설명용 구성도임을 명시
- 요금 영역을 월 44,000원 단일 카드로 단순화
- 3개월 요금은 랜딩페이지에서 제외하고, 6개월·12개월 할인은 보조 안내로 표시

## 광고 파라미터 전달

`/assets/js/landing.js`에서 랜딩페이지 URL의 다음 값을 무료체험 신청 URL로 전달합니다.

- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_keyword`, `utm_content`
- `n_keyword`, `n_rank`, `n_ad_group`, `n_ad`, `n_keyword_id`, `n_campaign_type`, `n_media`, `NaPm`

기존 CTA별 `utm_content`는 광고 URL에 같은 값이 있으면 광고 URL의 값으로 대체됩니다. CTA 위치별 분석이 필요하면 네이버 광고 최종 URL에서는 `utm_content`를 생략하는 것을 권장합니다.

## 전환 측정 연결 지점

무료체험과 상담 버튼 클릭 시 다음 `dataLayer` 이벤트가 발생합니다.

```text
이벤트명: landing_cta_click
cta_type: demo 또는 consult
cta_content: hero_cta, header_cta, pricing_cta 등
```

Google Tag Manager 또는 네이버 전환 스크립트 적용 시 이 이벤트를 보조 지표로 사용할 수 있습니다. 최종 핵심 전환은 ERP 서비스의 무료체험 신청 완료 페이지에서 측정하는 것이 좋습니다.

## 무료체험 절차 간소화 관련

이번 패키지는 정적 홈페이지와 광고 랜딩페이지 작업입니다. 실제 무료체험 신청 필드 축소와 단계 분리는 `erp.csweb.co.kr`의 Django 신청 폼·뷰·모델 소스 수정이 필요하므로 포함하지 않았습니다.

권장 간단 신청 항목:

- 회사명
- 담당자명
- 이메일
- 전화번호
- 관심 기능
- 개인정보 수집 동의

사업자등록번호, 대표자명, 업태·종목, 주소, 사업자등록증은 이메일 인증 또는 관리자 확인 이후 단계에서 받는 구성이 적합합니다.

## 배포 후 확인

1. 네 URL이 200 응답으로 열리는지 확인
2. 모바일에서 하단 무료체험 버튼이 표시되는지 확인
3. 광고 파라미터가 무료체험 신청 URL까지 전달되는지 확인
4. 신청 완료 전환 태그가 정상 집계되는지 확인
5. 네이버 광고그룹별로 해당 랜딩페이지를 각각 연결
