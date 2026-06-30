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
  { group: "social", id: "nameResponse", title: "이름을 불러도 반응이 적거나 일정하지 않다", detail: "CDC는 9개월 무렵 이름 반응 부족을 사회적 의사소통 관련 신호 중 하나로 제시합니다.", weight: 2, basis: "CDC" },
  { group: "social", id: "eyeContact", title: "눈맞춤, 표정 주고받기, 미소 반응이 또래보다 적다", detail: "눈맞춤 회피나 표정 반응 부족은 사회적 상호작용 어려움과 관련될 수 있습니다.", weight: 2, basis: "CDC" },
  { group: "social", id: "gesture", title: "안녕 손 흔들기, 고개 끄덕임, 손짓 같은 몸짓이 적다", detail: "CDC는 12개월 무렵 몸짓이 거의 없거나 적은 경우를 관찰할 신호로 안내합니다.", weight: 2, basis: "CDC" },
  { group: "social", id: "pointing", title: "흥미로운 것을 손가락으로 가리키거나 보여주는 행동이 적다", detail: "18개월 무렵 관심 공유를 위한 가리키기가 적으면 전문 상담을 고려할 수 있습니다.", weight: 3, basis: "CDC" },
  { group: "social", id: "sharedAttention", title: "다른 사람이 보는 것, 놀라는 것, 가리키는 것에 관심을 잘 보이지 않는다", detail: "사람과 관심을 공유하기보다 혼자 보는 대상에 오래 머무는지 확인합니다.", weight: 2, basis: "CDC" },
  { group: "social", id: "peerPlay", title: "또래 아이에게 관심을 보이거나 함께 놀이에 참여하는 모습이 적다", detail: "36개월 전후에는 다른 아이를 알아차리고 놀이에 참여하는지도 중요한 관찰점입니다.", weight: 2, basis: "CDC" },
  { group: "behavior", id: "languageDelay", title: "말, 옹알이, 두 단어 표현이 나이에 비해 늦다고 느껴진다", detail: "언어 지연은 ASD만의 신호는 아니지만 발달 평가가 필요한 흔한 이유입니다.", weight: 3, basis: "CDC/AAP" },
  { group: "behavior", id: "repetitive", title: "손 흔들기, 빙글빙글 돌기, 물건 줄 세우기 같은 반복 행동이 자주 보인다", detail: "제한적·반복적 행동은 ASD 관련 핵심 영역 중 하나입니다.", weight: 2, basis: "CDC" },
  { group: "behavior", id: "restrictedInterest", title: "바퀴, 빛, 특정 영상, 숫자·글자 등 일부 대상에 과하게 몰입한다", detail: "물건의 일부나 특정 자극에 강하게 몰입하는 양상을 확인합니다.", weight: 2, basis: "CDC" },
  { group: "behavior", id: "sensory", title: "소리, 촉감, 냄새, 옷감, 음식 식감에 대한 반응이 유난히 강하거나 둔하다", detail: "감각 반응 차이가 일상생활을 어렵게 만드는지 함께 봅니다.", weight: 1, basis: "CDC" },
  { group: "behavior", id: "changeDistress", title: "일상 순서나 환경이 바뀌면 심하게 힘들어한다", detail: "같은 방식에 대한 고집과 변화 어려움은 반복·제한 행동 영역과 관련될 수 있습니다.", weight: 1, basis: "CDC" },
  { group: "behavior", id: "regression", title: "이전에 하던 말, 눈맞춤, 놀이, 사회적 반응이 줄거나 사라졌다", detail: "발달 퇴행은 나이와 점수에 관계없이 빠른 상담이 필요한 신호입니다.", weight: 5, urgent: true, basis: "CDC/AAP" },
];

const state = { step: 0, age: "", answers: {} };

const ageOptions = document.querySelector("#ageOptions");
const socialQuestions = document.querySelector("#socialQuestions");
const behaviorQuestions = document.querySelector("#behaviorQuestions");
const steps = [...document.querySelectorAll(".step")];
const stepLabel = document.querySelector("#stepLabel");
const progressBar = document.querySelector("#progressBar");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const restartButton = document.querySelector("#restartButton");
const copyButton = document.querySelector("#copyButton");
const resultCard = document.querySelector("#resultCard");

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

function questionMarkup(question) {
  const current = state.answers[question.id];
  const selected = current !== undefined ? "selected" : "";
  const buttons = scaleOptions.map((option) => {
    const active = current === option.value ? "active" : "";
    return '<button type="button" class="' + active + '" data-answer="' + option.value + '">' + option.label + '</button>';
  }).join("");

  return '<article class="question-card ' + selected + '" data-question="' + question.id + '"><div class="question-top"><div><h3>' + question.title + '</h3><p>' + question.detail + '</p><ul class="basis-list"><li>근거 축: ' + question.basis + '</li></ul></div><div class="toggle scale-toggle" role="group" aria-label="' + question.title + '">' + buttons + '</div></div></article>';
}

function renderQuestions() {
  socialQuestions.innerHTML = questions.filter((q) => q.group === "social").map(questionMarkup).join("");
  behaviorQuestions.innerHTML = questions.filter((q) => q.group === "behavior").map(questionMarkup).join("");
  document.querySelectorAll(".question-card button").forEach((button) => {
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
  if (adjustedTotal >= 30) {
    return { level: "높음", className: "risk-high", title: "전문 발달 평가를 받아보는 것이 좋습니다", body: "여러 영역에서 의심 신호가 겹쳐 보입니다. 이 결과는 진단이 아니지만, 공식 선별과 전문 평가로 현재 발달 상태를 확인해 볼 필요가 큽니다.", total: adjustedTotal, actions: ["소아청소년과 또는 발달센터 상담 예약", "16~30개월이면 M-CHAT-R/F 같은 공식 선별 도구 확인", "언어·사회성·놀이 관찰 기록 작성"] };
  }
  if (adjustedTotal >= 14) {
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

function setStep(nextStep) {
  state.step = Math.max(0, Math.min(3, nextStep));
  steps.forEach((step, index) => step.classList.toggle("active", index === state.step));
  if (state.step === 3) renderResult();
  updateNav();
}

function updateNav() {
  const labels = ["1. 아이 나이", "2. 사회적 소통", "3. 언어·행동", "4. 결과"];
  stepLabel.textContent = labels[state.step];
  progressBar.style.width = ((state.step + 1) / 4) * 100 + "%";
  backButton.style.visibility = state.step === 0 ? "hidden" : "visible";
  nextButton.textContent = state.step === 2 ? "결과 보기" : "다음";
  nextButton.style.display = state.step === 3 ? "none" : "inline-flex";
  const socialComplete = questions.filter((q) => q.group === "social").every((q) => q.id in state.answers);
  const behaviorComplete = questions.filter((q) => q.group === "behavior").every((q) => q.id in state.answers);
  nextButton.disabled = (state.step === 0 && !state.age) || (state.step === 1 && !socialComplete) || (state.step === 2 && !behaviorComplete);
}

function summaryText() {
  const result = calculateResult();
  const ageLabel = ages.find((age) => age.id === state.age)?.label || "미선택";
  const checked = questions.filter((question) => (state.answers[question.id] ?? 0) > 0).map((question) => question.title + "(" + scaleOptions[state.answers[question.id]].label + ")");
  return ["아이 발달 신호 체크 결과", "나이: " + ageLabel, "권장 단계: " + result.level, "점수: " + result.total + "점", "체크된 신호: " + (checked.length ? checked.join(" / ") : "없음"), "이 결과는 진단이 아니며, 걱정이 지속되면 전문기관 상담을 권합니다."].join("
");
}

nextButton.addEventListener("click", () => setStep(state.step + 1));
backButton.addEventListener("click", () => setStep(state.step - 1));
restartButton.addEventListener("click", () => { state.step = 0; state.age = ""; state.answers = {}; renderAges(); renderQuestions(); setStep(0); });
copyButton.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(summaryText()); copyButton.textContent = "복사 완료"; }
  catch (error) { copyButton.textContent = "복사 제한됨"; console.warn("Clipboard copy failed", error); }
  window.setTimeout(() => { copyButton.textContent = "결과 요약 복사"; }, 1400);
});

document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    const regionInput = document.querySelector("#regionInput");
    const region = (regionInput?.value || "").trim();
    const query = encodeURIComponent((region + " " + button.dataset.search).trim());
    window.open("https://map.naver.com/p/search/" + query, "_blank", "noopener,noreferrer");
  });
});

renderAges();
renderQuestions();
setStep(0);
