# 404 비즈랩

의정부·양주 소상공인을 위한 당근·네이버 온라인 가게 정리, 홍보물, 월 홍보관리, 문의형 홈페이지 판매 랜딩페이지입니다.

## 공개 원칙

이 저장소에는 공개 가능한 정적 웹 소스와 배포 워크플로만 둡니다.

커밋하지 않는 항목:
- Hostinger FTP 비밀번호
- API 비밀키 / 인증서
- 내부 고객 설정
- 백업파일
- 운영용 비공개 문서

## 배포 대상

- URL: `https://404foundme.com/bizlab/`
- Hostinger 경로: `public_html/bizlab/`
- 정적 진입점: `index.html`

## 공개 상품

1. 가게 첫인상 개선팩 — 79,000원
2. 온라인 가게 리모델링 — 129,000원
3. 온라인 홍보관리 — 149,000원/월
4. 문의받는 홈페이지 — 390,000원부터

당근 전용 랜딩에서는 AI 챗봇을 판매하지 않습니다.

## GitHub Actions 배포

Repository → Settings → Secrets and variables → Actions에서 아래 Secrets를 등록합니다.

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_REMOTE_DIR` — 예: `public_html/bizlab`

`main` 브랜치의 `index.html`, `styles.css`, `app.js`가 변경되면 GitHub Actions가 Hostinger에 업로드하고 공개 URL을 확인합니다.

## 콘텐츠 원칙

- 가격과 작업범위를 먼저 보여줍니다.
- 실제 고객 사례가 생기기 전에는 샘플에 `제작 예시`를 표시합니다.
- 매출·순위·노출 보장 표현을 사용하지 않습니다.
- 가짜 후기나 가짜 고객 실적을 만들지 않습니다.
- 실제 사례가 확보되면 제작 예시를 순차적으로 실제 Before/After와 후기 화면으로 교체합니다.
