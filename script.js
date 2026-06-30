const ages = [
  { id: "under12", label: "12개월 전후", hint: "이름 반응, 눈맞춤, 몸짓" },
  { id: "12to18", label: "12~18개월", hint: "가리키기, 관심 공유, 옹알이" },
  { id: "18to24", label: "18~24개월", hint: "자폐 선별 권고 시기" },
  { id: "24to36", label: "24~36개월", hint: "두 단어 표현, 상호작용" },
  { id: "over36", label: "36개월 이상", hint: "또래 관계, 반복 행동" },
];

const scaleOptions = [
  { value: 0, label: "전혀 아니다" },
  { value: 1, label: "조금 그렇다" },
  { value: 2, label: "꽤 그렇다" },
  { value: 3, label: "매우 그렇다" },
];

const ageGuidance = {
  under12: "12개월 전후에는 자폐 특이 선별보다 발달 모니터링이 중심입니다. 이름 반응, 눈맞춤, 표정, 간단한 상호작용 놀이를 관찰하고 걱정되면 소아청소년과에 문의하세요.",
  "12to18": "12~18개월에는 몸짓, 관심 공유, 보여주기, 가리키기 같은 사회적 의사소통 신호가 중요합니다. 걱정이 있으면 18개월 선별 시기까지 기다리지 않아도 됩니다.",
  "18to24": "18~24개월은 AAP가 ASD 특이 선별을 권장하는 핵심 시기입니다. 공식 M-CHAT-R/F 또는 의료기관 선별을 함께 권합니다.",
  "24to36": "24~36개월에는 언어, 두 단어 조합, 또래 관심, 상징놀이, 반복 행동을 함께 봐야 합니다. 의심 신호가 겹치면 전문 평가를 권합니다.",
  over36: "36개월 이후에는 또래 놀이, 상상놀이, 대화 주고받기, 반복 관심, 감각 어려움이 생활에 미치는 영향을 함께 확인합니다.",
};

const questions = [
  { group: "social", id: "nameResponse", title: "이름을 불러도 반응이 적거나 일정하지 않다", detail: "소리가 들리는데도 사람의 부름에 잘 돌아보지 않는 모습이 반복됩니다.", weight: 2 },
  { group: "social", id: "eyeContact", title: "눈맞춤, 표정 주고받기, 미소 반응이 또래보다 적다", detail: "보호자와 즐거움을 나누는 표정이나 시선 교환이 드뭅니다.", weight: 2 },
  { group: "social", id: "gesture", title: "안녕 손 흔들기, 고개 끄덕임, 손짓 같은 몸짓이 적다", detail: "말 대신 쓰는 몸짓이나 표정 표현이 또래보다 적은지 봅니다.", weight: 2 },
  { group: "social", id: "pointing", title: "흥미로운 것을 손가락으로 가리키거나 보여주는 행동이 적다", detail: "무언가를 함께 보자고 가리키거나 보여주는 행동이 적습니다.", weight: 3 },
  { group: "social", id: "sharedAttention", title: "다른 사람이 보는 것, 놀라는 것, 가리키는 것에 관심을 잘 보이지 않는다", detail: "사람과 관심을 공유하기보다 혼자 보는 대상에 오래 머무는지 확인합니다.", weight: 2 },
  { group: "social", id: "imitation", title: "박수, 빠이빠이, 간단한 동작 따라 하기가 적다", detail: "사람을 보고 따라 하며 배우는 상호작용이 얼마나 보이는지 확인합니다.", weight: 2 },
  { group: "social", id: "pretendPlay", title: "먹이는 척, 재우는 척 같은 상상놀이가 적다", detail: "나이에 맞는 흉내놀이와 상징놀이가 거의 보이지 않는지 살펴봅니다.", weight: 2 },
  { group: "social", id: "peerPlay", title: "또래 아이에게 관심을 보이거나 함께 놀이에 참여하는 모습이 적다", detail: "다른 아이를 알아차리고 놀이에 참여하는지도 중요한 관찰점입니다.", weight: 2 },
  { group: "behavior", id: "languageDelay", title: "말, 옹알이, 두 단어 표현이 나이에 비해 늦다고 느껴진다", detail: "언어 지연은 ASD만의 신호는 아니지만 발달 평가가 필요한 흔한 이유입니다.", weight: 3 },
  { group: "behavior", id: "communicationNeed", title: "원하는 것을 말이나 손짓보다 울음, 끌고 가기로 표현한다", detail: "사람에게 의도를 전달하는 방식이 제한적인지 확인합니다.", weight: 2 },
  { group: "behavior", id: "repetitive", title: "손 흔들기, 빙글빙글 돌기, 물건 줄 세우기 같은 반복 행동이 자주 보인다", detail: "반복 행동 자체보다 빈도, 강도, 중단 어려움이 중요합니다.", weight: 2 },
  { group: "behavior", id: "restrictedInterest", title: "바퀴, 빛, 특정 영상, 숫자·글자 등 일부 대상에 과하게 몰입한다", detail: "물건의 일부나 특정 자극에 강하게 몰입하는 양상을 확인합니다.", weight: 2 },
  { group: "behavior", id: "sensory", title: "소리, 촉감, 냄새, 옷감, 음식 식감에 대한 반응이 유난히 강하거나 둔하다", detail: "감각 반응 차이가 일상생활을 어렵게 만드는지 함께 봅니다.", weight: 1 },
  { group: "behavior", id: "changeDistress", title: "일상 순서나 환경이 바뀌면 심하게 힘들어한다", detail: "예상 밖의 변화에 긴 시간 진정하기 어려운 모습이 있는지 봅니다.", weight: 1 },
  { group: "behavior", id: "regression", title: "이전에 하던 말, 눈맞춤, 놀이, 사회적 반응이 줄거나 사라졌다", detail: "발달 퇴행은 나이와 점수에 관계없이 빠른 상담이 필요한 신호입니다.", weight: 5, urgent: true },
];

const state = { step: 0, age: "", answers: {}, questionIndex: 0 };

const ageOptions = document.querySelector("#ageOptions");
const questionStage = document.querySelector("#questionStage");
const steps = [...document.querySelectorAll(".step")];
const stepLabel = document.querySelector("#stepLabel");
const progressBar = document.querySelector("#progressBar");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const restartButton = document.querySelector("#restartButton");
const copyButton = document.querySelector("#copyButton");
const resultCard = document.querySelector("#resultCard");
const startButton = document.querySelector("#startButton");
const sourceToggle = document.querySelector("#sourceToggle");
const sourcePreview = document.querySelector("#sourcePreview");
const checkerSection = document.querySelector("#checker");
const landingView = document.querySelector("#landingView");
const homeButton = document.querySelector("#homeButton");
const resultOnlySections = [...document.querySelectorAll(".result-only")];

function renderAges() {
  ageOptions.innerHTML = ages.map((age) => '<button type="button" class="age-option" data-age="' + age.id + '"><strong>' + age.label + '</strong><span>' + age.hint + '</span></button>').join("");
  ageOptions.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.age = button.dataset.age;
      ageOptions.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      updateNav();
    });
  });
}

function questionMarkup(question, index) {
  const current = state.answers[question.id];
  const buttons = scaleOptions.map((option) => {
    const active = current === option.value ? "active" : "";
    return '<button type="button" class="' + active + '" data-answer="' + option.value + '"><span>' + option.label + '</span><small>' + option.value + '점</small></button>';
  }).join("");
  const groupLabel = question.group === "social" ? "사회적 소통" : "언어·행동·감각";
  return '<div class="question-counter">문항 ' + (index + 1) + ' / ' + questions.length + ' · ' + groupLabel + '</div><article class="question-card selected single-question-card" data-question="' + question.id + '"><h2>' + question.title + '</h2><p class="step-copy">' + question.detail + '</p><div class="toggle scale-toggle" role="group" aria-label="' + question.title + '">' + buttons + '</div></article>';
}

function renderQuestions() {
  if (!questionStage) return;
  const questionIndex = Math.max(0, Math.min(questions.length - 1, state.questionIndex || 0));
  questionStage.innerHTML = questionMarkup(questions[questionIndex], questionIndex);
  questionStage.querySelectorAll(".question-card button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".question-card");
      state.answers[card.dataset.question] = Number(button.dataset.answer);
      renderQuestions();
      updateNav();
    });
  });
}

function calculateResult() {
  const answered = questions.map((question) => ({ ...question, value: state.answers[question.id] ?? 0 }));
  const total = answered.reduce((sum, question) => sum + question.value * question.weight, 0);
  const regression = state.answers.regression ?? 0;
  const socialConcern = answered.filter((q) => q.group === "social" && q.value >= 2).length;
  const mchatAge = ["18to24", "24to36"].includes(state.age);
  const adjustedTotal = total + (mchatAge && (state.answers.languageDelay ?? 0) >= 2 && socialConcern >= 2 ? 4 : 0);

  if (regression >= 2) {
    return { level: "긴급 확인 권장", className: "risk-urgent", title: "발달 퇴행 신호가 있어 빠른 상담을 권합니다", body: "이전에 하던 말이나 사회적 반응이 뚜렷하게 줄어든 경우에는 기다리기보다 소아청소년과, 소아정신건강의학과, 발달 전문기관에 빠르게 문의하는 것이 좋습니다.", total: adjustedTotal, actions: ["가까운 소아청소년과 또는 발달 전문기관 예약", "영유아검진/K-DST 결과와 관찰 기록 준비", "어린이집 또는 가족이 본 변화 시점 정리"] };
  }
  if (adjustedTotal >= 38) {
    return { level: "높음", className: "risk-high", title: "전문 발달 평가를 받아보는 것이 좋습니다", body: "여러 영역에서 의심 신호가 겹쳐 보입니다. 이 결과는 진단이 아니지만, 공식 선별과 전문 평가로 현재 발달 상태를 확인해 볼 필요가 큽니다.", total: adjustedTotal, actions: ["소아청소년과 또는 발달센터 상담 예약", "16~30개월이면 M-CHAT-R/F 같은 공식 선별 도구 확인", "언어·사회성·놀이 관찰 기록 작성"] };
  }
  if (adjustedTotal >= 18) {
    return { level: "주의", className: "risk-watch", title: "가까운 시일 내 상담을 받아보세요", body: "일부 발달 신호가 또래와 다르게 보일 수 있습니다. 보호자 관찰만으로 단정하지 말고 전문가와 함께 확인하는 편이 안전합니다.", total: adjustedTotal, actions: ["다음 영유아검진 때 반드시 질문", "2~4주간 반복되는 행동 기록", "걱정이 지속되면 발달 상담 예약"] };
  }
  return { level: "낮음", className: "risk-low", title: "현재 응답만으로는 높은 의심 단계는 아닙니다", body: "다만 아이의 발달은 계속 변합니다. 보호자가 걱정되는 신호를 반복해서 본다면 점수와 관계없이 상담을 받아도 괜찮습니다.", total: adjustedTotal, actions: ["정기 영유아검진 유지", "새로운 걱정 신호가 생기면 다시 체크", "발달 퇴행이 보이면 즉시 상담"] };
}

function renderResult() {
  const result = calculateResult();
  const checked = questions.filter((question) => (state.answers[question.id] ?? 0) > 0);
  const officialScreening = ["18to24", "24to36"].includes(state.age) ? "16~30개월 범위라면 M-CHAT-R/F 같은 검증된 자폐 선별 도구나 의료기관 평가를 함께 받아보는 것이 좋습니다." : "이 결과는 공식 진단이 아니며, 걱정이 반복되면 나이와 점수에 관계없이 전문가 상담을 권합니다.";
  const checkedText = checked.length ? checked.map((question) => question.title + "(" + scaleOptions[state.answers[question.id]].label + ")").join(", ") : "없음";
  resultCard.innerHTML = '<span class="risk-badge ' + result.className + '">' + result.level + '</span><h3>' + result.title + '</h3><p>' + result.body + '</p><p><strong>체크 점수:</strong> ' + result.total + '점</p><div class="age-guidance"><strong>선택 나이대 기준 안내</strong><p>' + (ageGuidance[state.age] || "") + '</p><p><strong>공식 선별 안내:</strong> ' + officialScreening + '</p><p><strong>판정 방향:</strong> 진단명이 아니라 상담 필요도를 정리한 것입니다.</p></div><ul>' + result.actions.map((action) => '<li>' + action + '</li>').join("") + '</ul><p><strong>체크된 신호:</strong> ' + checkedText + '</p>';
}

function beginCheckFlow() {
  landingView?.classList.add("is-hidden");
  landingView?.setAttribute("aria-hidden", "true");
  checkerSection?.classList.remove("is-hidden");
  checkerSection?.setAttribute("aria-hidden", "false");
  resultOnlySections.forEach((section) => section.classList.add("is-hidden"));
  state.questionIndex = 0;
  setStep(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnHome() {
  checkerSection?.classList.add("is-hidden");
  checkerSection?.setAttribute("aria-hidden", "true");
  resultOnlySections.forEach((section) => section.classList.add("is-hidden"));
  landingView?.classList.remove("is-hidden");
  landingView?.setAttribute("aria-hidden", "false");
  state.step = 0;
  state.age = "";
  state.answers = {};
  state.questionIndex = 0;
  renderAges();
  renderQuestions();
  updateNav();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateResultSections() {
  const showResultSections = state.step === 2;
  resultOnlySections.forEach((section) => section.classList.toggle("is-hidden", !showResultSections));
}

function setStep(nextStep) {
  state.step = Math.max(0, Math.min(2, nextStep));
  steps.forEach((step, index) => step.classList.toggle("active", index === state.step));
  if (state.step === 2) renderResult();
  updateResultSections();
  updateNav();
}

function updateNav() {
  const labels = ["1. 아이 나이", "2. 문항 체크", "3. 결과"];
  const qIndex = state.questionIndex || 0;
  const currentQuestion = questions[qIndex];
  stepLabel.textContent = state.step === 1 ? "2. 문항 " + (qIndex + 1) + " / " + questions.length : labels[state.step];
  const progress = state.step === 0 ? 12 : state.step === 1 ? 18 + ((qIndex + 1) / questions.length) * 64 : 100;
  progressBar.style.width = progress + "%";
  backButton.style.visibility = state.step === 0 ? "hidden" : "visible";
  nextButton.style.display = state.step === 2 ? "none" : "inline-flex";
  nextButton.textContent = state.step === 1 && qIndex === questions.length - 1 ? "결과 보기" : "다음";
  nextButton.disabled = (state.step === 0 && !state.age) || (state.step === 1 && !(currentQuestion.id in state.answers));
}

function summaryText() {
  const result = calculateResult();
  const ageLabel = ages.find((age) => age.id === state.age)?.label || "미선택";
  const checked = questions.filter((question) => (state.answers[question.id] ?? 0) > 0).map((question) => question.title + "(" + scaleOptions[state.answers[question.id]].label + ")");
  return ["아이 발달 신호 체크 결과", "나이: " + ageLabel, "권장 단계: " + result.level, "점수: " + result.total + "점", "체크된 신호: " + (checked.length ? checked.join(" / ") : "없음"), "이 결과는 진단이 아니며, 걱정이 지속되면 전문기관 상담을 권합니다."].join("\n");
}

startButton?.addEventListener("click", beginCheckFlow);
homeButton?.addEventListener("click", returnHome);
sourceToggle?.addEventListener("click", () => {
  const isOpen = !sourcePreview.hidden;
  sourcePreview.hidden = isOpen;
  sourceToggle.setAttribute("aria-expanded", String(!isOpen));
});
nextButton.addEventListener("click", () => {
  if (state.step === 0) {
    state.questionIndex = 0;
    renderQuestions();
    setStep(1);
  } else if (state.step === 1 && state.questionIndex < questions.length - 1) {
    state.questionIndex += 1;
    renderQuestions();
    updateNav();
  } else if (state.step === 1) {
    setStep(2);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
});
backButton.addEventListener("click", () => {
  if (state.step === 1 && state.questionIndex > 0) {
    state.questionIndex -= 1;
    renderQuestions();
    updateNav();
  } else {
    setStep(state.step - 1);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
});
restartButton.addEventListener("click", () => { state.step = 0; state.age = ""; state.answers = {}; state.questionIndex = 0; renderAges(); renderQuestions(); setStep(0); });
copyButton.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(summaryText()); copyButton.textContent = "복사 완료"; }
  catch (error) { copyButton.textContent = "복사 제한됨"; console.warn("Clipboard copy failed", error); }
  window.setTimeout(() => { copyButton.textContent = "결과 요약 복사"; }, 1400);
});

document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    const regionInput = document.querySelector("#regionInput");
    const results = document.querySelector("#mapResults");
    const region = (regionInput?.value || "").trim();
    const rawQuery = (region + " " + button.dataset.search).trim();
    const query = encodeURIComponent(rawQuery);
    const googleEmbed = "https://www.google.com/maps?q=" + query + "&output=embed";
    results.innerHTML = '<strong>검색어: ' + rawQuery + '</strong><p class="map-help">지도 안의 장소 이름이나 핀을 누르면 주소, 전화번호, 영업 정보 등 지도 서비스가 제공하는 기본 정보를 볼 수 있습니다.</p><div class="embedded-map"><iframe title="상담처 지도 검색 결과" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="' + googleEmbed + '"></iframe></div><div class="map-link-row"><a class="primary-link" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=' + query + '">구글 지도에서 크게 보기</a><a class="secondary-link" target="_blank" rel="noreferrer" href="https://map.naver.com/p/search/' + query + '">네이버 지도</a><a class="secondary-link" target="_blank" rel="noreferrer" href="https://map.kakao.com/?q=' + query + '">카카오맵</a></div>';
  });
});

renderAges();
renderQuestions();
setStep(0);
