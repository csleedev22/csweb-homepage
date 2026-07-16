# CSWEB ERP 홈페이지 + 블로그 연계 패키지

## 구성

- `/index.html` : 홈페이지 메인
- `/blog/index.html` : 블로그 목록
- `/blog/posts/*.html` : 게시글 상세
- `/assets/css/main.css` : 홈페이지 스타일
- `/assets/css/blog.css` : 블로그 스타일
- `/assets/js/main.js` : 요금 토글, UTM 전달 스크립트
- `/assets/img/csweb-erp-og.png` : 공유용 대표 이미지
- `/sitemap.xml` : 검색엔진 제출용 사이트맵
- `/robots.txt` : 크롤러 안내
- `/feed.xml` : RSS 피드

## 배포

기존 홈페이지 루트에 이 패키지의 내용을 그대로 업로드하면 됩니다.

- 홈페이지: `https://www.csweb.co.kr/`
- 블로그: `https://www.csweb.co.kr/blog/`
- 사이트맵: `https://www.csweb.co.kr/sitemap.xml`

## 광고용 랜딩페이지

- `/erp-small-business/` : 중소기업 통합 ERP 광고 랜딩페이지
- `/manufacturing-erp/` : 제조업·BOM·생산·외주 광고 랜딩페이지
- `/inventory-management/` : 입출고·현재고·월별 재고 광고 랜딩페이지
- `/accounting-erp/` : 전표·원장·시산표·재무제표 광고 랜딩페이지
- `/assets/css/landing.css` : 랜딩페이지 공통 스타일
- `/assets/js/landing.js` : UTM/네이버 광고 파라미터 전달 및 CTA 이벤트 훅

### 광고 연결 권장안

- 중소기업 ERP 키워드 → `https://www.csweb.co.kr/erp-small-business/`
- 제조업 ERP/BOM/생산관리 키워드 → `https://www.csweb.co.kr/manufacturing-erp/`
- 재고관리 프로그램 키워드 → `https://www.csweb.co.kr/inventory-management/`
- 회계 ERP/전표/원장 키워드 → `https://www.csweb.co.kr/accounting-erp/`

각 무료체험 버튼은 현재 URL의 UTM 및 네이버 광고 파라미터를 ERP 무료체험 신청 페이지로 전달합니다. 실제 네이버 전환 스크립트 또는 GTM을 사용하는 경우 `landing_cta_click` 이벤트를 연결해 사용할 수 있습니다.
