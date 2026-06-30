# 아이 발달 신호 체크

영유아 발달·자폐 의심 신호를 보호자가 차분히 확인하고 전문 상담 필요성을 판단하도록 돕는 1차 MVP입니다.

## 중요한 한계

이 프로젝트는 자폐 스펙트럼 장애를 진단하지 않습니다. 공식 진단은 의료진과 발달 전문가의 평가가 필요합니다. 16~30개월 아이에게는 M-CHAT-R/F 같은 검증된 공식 선별 도구와 의료기관 상담을 우선 권장합니다.

## 포함 기능

- 나이대 선택
- 사회적 소통 신호 체크
- 언어·행동·감각 신호 체크
- 점수 기반 상담 권유 결과
- 결과 요약 복사
- CDC, AAP, M-CHAT-R/F 기반 판정 기준 설명
- Sentry 브라우저 오류 기록

## Sentry

- Organization: `park-company-dy`
- Project: `autism-early-check`

브라우저 런타임 오류는 Sentry 프로젝트로 전송되도록 연결되어 있습니다.

## 2026-06-30 scale update

- Replaced yes/no answers with a 4-step frequency scale: 전혀 아니다, 조금 그렇다, 꽤 그렇다, 매우 그렇다.
- Scores now use 0~3 points per item, multiplied by clinical-signal weights.
- Developmental regression remains a separate urgent flag when marked 꽤 그렇다 or 매우 그렇다.

## 2026-06-30 question and referral refinement

- Expanded the MVP to a 15-item home screening guide.
- Removed repetitive per-question source labels and kept source explanation in the methodology page.
- Replaced popup map opening with visible Naver Map and KakaoMap links generated from the entered region and service category.
- Adjusted score thresholds for the larger 15-item weighted scale.
