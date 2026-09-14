document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    {lesson:'Lesson 1', n:4, sentence:'They are on their way / to visit the homes of children / ________ from a deadly disease / called pertussis.', answer:'suffering', ko:'그들은 가는 길이다 / 아이들의 집을 방문하러 / 치명적인 병을 앓고 있는 / 백일해라고 불리는.'},
    {lesson:'Lesson 2', n:1, sentence:'When we think about science, / we might consider it as a domain / ________ exclusively for scientists / in long, white lab coats / who spend their days / conducting experiments and analyzing data.', answer:'reserved', ko:'우리가 과학에 대해 생각할 때, / 우리는 그것을 하나의 영역으로 여길지 모른다 / 과학자들만을 위해 마련된 / 길고 흰 실험복을 입은 / 자신의 하루하루를 보내는 / 실험을 수행하고 데이터를 분석하며.'},
    {lesson:'Lesson 1', n:7, sentence:'Pertussis is a bacterial disease / ________ by serious coughing, breathing difficulties, / and the high-pitched "whooping" sound / that people with the disease make / as they try to breathe in.', answer:'characterized', ko:'백일해는 세균성 질병이다 / 심한 기침과 호흡 곤란을 특징으로 하는 / 그리고 높은 음의 소리를 / 그 병에 걸린 사람들이 내는 / 숨을 들이쉬려 할 때.'},
    {lesson:'Lesson 2', n:7, sentence:'Kevin Schawinski was a young astronomy researcher / ________ black holes and the evolution of galaxies / at the University of Oxford.', answer:'studying', ko:'Kevin Schawinski는 젊은 천문학 연구자였다 / 블랙홀과 은하의 진화를 연구하던 / 옥스퍼드 대학교에서.'},
    {lesson:'Lesson 1', n:12, sentence:'The cause of the disease / had been identified in 1906, / but the vaccines that had been developed / were ________.', answer:'ineffective', ko:'그 병의 원인은 / 1906년에 밝혀졌다, / 그러나 개발되었던 백신들은 / 효과가 없었다.'},
    {lesson:'Lesson 2', n:9, sentence:'He had to ________ / around one million images of galaxies / according to their shape.', answer:'classify', ko:'그는 분류해야 했다 / 약 백만 장의 은하 이미지를 / 그 모양에 따라.'},
    {lesson:'Lesson 1', n:13, sentence:'Scientists and researchers worked for more than 20 years / to produce an effective one, / but their efforts were ________—until Kendrick and Eldering came along.', answer:'fruitless', ko:'과학자와 연구자들은 20년 넘게 애썼다 / 효과적인 백신을 만들어 내려고, / 그러나 그들의 노력은 결실이 없었다 — Kendrick과 Eldering이 등장하기 전까지는.'},
    {lesson:'Lesson 2', n:15, sentence:'Lintott ________ / that he turn to the Internet / to ask other people for help.', answer:'suggested', ko:'Lintott는 제안했다 / 그가 인터넷에 의지해 볼 것을 / 다른 사람들에게 도움을 청하기 위해.'},
    {lesson:'Lesson 1', n:15, sentence:'It was there / that she met fellow ________ Grace Eldering.', answer:'bacteriologist', ko:'바로 그곳에서였다 / 그녀가 동료 세균학자 Grace Eldering을 만난 것은.'},
    {lesson:'Lesson 2', n:17, sentence:'The website was kept as simple as possible, / with a very basic design and an ________ interface.', answer:'easy-to-use', ko:'그 웹사이트는 가능한 한 단순하게 유지되었다, / 매우 기본적인 디자인과 사용하기 쉬운 인터페이스로.'},
    {lesson:'Lesson 1', n:23, sentence:'The difficulties they faced / did not stop them / from ________ toward their goal.', answer:'persisting', ko:'그들이 마주한 어려움들도 / 그들을 막지 못했다 / 목표를 향해 계속 나아가는 것을.'},
    {lesson:'Lesson 2', n:26, sentence:'In a year and a half, / more than 80,000 individuals ________, / and they made more than 75 million classifications.', answer:'participated', ko:'1년 반 만에, / 8만 명이 넘는 사람들이 참여했다, / 그리고 그들은 7,500만 건이 넘는 분류를 해냈다.'},
    {lesson:'Lesson 1', n:27, sentence:'The patients coughed onto a petri dish, / which was then put into an ________.', answer:'incubator', ko:'환자들이 페트리 접시에 대고 기침을 했다, / 그리고 그것은 그 다음 배양기에 넣어졌다.'},
    {lesson:'Lesson 2', n:41, sentence:'Unsure of what they were, / the group decided to name the ________ "Steve," / based on a scene from an animated movie / where some characters give that name to an unfamiliar object.', answer:'phenomenon', ko:'그것들이 무엇인지 확신하지 못한 채, / 그 모임은 그 현상을 ‘Steve’라고 이름 짓기로 했다 / 한 애니메이션 영화의 장면에 착안하여.'},
    {lesson:'Lesson 1', n:43, sentence:'Eleanor Roosevelt, / whose husband suffered from polio, / was interested in ________ infectious diseases.', answer:'fighting', ko:'Eleanor Roosevelt는, / 그런데 그녀의 남편이 소아마비를 앓았고, / 전염병과 싸우는 일에 관심이 있었다.'},
    {lesson:'Lesson 2', n:45, sentence:'They confirmed that it was not an aurora, / but it did not ________ anything / they had seen before.', answer:'resemble', ko:'그들은 그것이 오로라가 아니라는 것을 확인해 주었다, / 그러나 그것은 어떤 것과도 닮지 않았다 / 그들이 이전에 본.'},
    {lesson:'Lesson 1', n:51, sentence:'Kendrick and Eldering were often told / that they could have become very wealthy / if they had ________ their vaccine.', answer:'patented', ko:'Kendrick과 Eldering은 자주 들었다 / 그들이 아주 부자가 될 수도 있었을 것이라는 말을 / 만약 백신에 특허를 냈더라면.'},
    {lesson:'Lesson 2', n:52, sentence:'Experts have ________ / that it is the dedicated members of the aurora chasers group / that deserve the credit for discovering STEVE.', answer:'acknowledged', ko:'전문가들은 인정해 왔다 / 바로 그 헌신적인 오로라 추적자 모임의 회원들이 / STEVE를 발견한 공로를 받아 마땅하다는 것을.'},
    {lesson:'Lesson 1', n:68, sentence:'The original idea behind the World Wide Web / was to make it easier / for scientists from different universities / to share information and ________ with one another.', answer:'communicate', ko:'월드 와이드 웹에 담긴 원래의 발상은 / 더 쉽게 만드는 것이었다 / 서로 다른 대학의 과학자들이 / 정보를 공유하고 서로 소통하는 것을.'},
    {lesson:'Lesson 2', n:60, sentence:'The next great scientific achievement could be made / by citizen scientists ________ their time / for the purpose of better understanding the world.', answer:'volunteering', ko:'다음번의 위대한 과학적 성취는 이루어질 수도 있다 / 자신의 시간을 기꺼이 내어 주는 시민 과학자들에 의해 / 세상을 더 잘 이해하기 위해.'}
  ];

  const quiz = document.getElementById('quiz');
  const timer = document.getElementById('timer');
  const submit = document.getElementById('submit-quiz');
  const result = document.getElementById('result');
  let remaining = 25 * 60;
  let finished = false;

  const normalized = value => value.trim().toLowerCase().replace(/[“”‘’]/g, "'");

  questions.forEach((q, i) => {
    const card = document.createElement('section');
    card.className = 'question-card';
    card.innerHTML = `
      <div class="question-number">QUESTION ${String(i + 1).padStart(2, '0')}</div>
      <div class="source-tag">${q.lesson} · 문장 #${q.n}</div>
      <div class="sentence">${q.sentence.replace('________', '<span class="blank">&nbsp;</span>')}</div>
      <div class="korean">${q.ko}</div>
      <input class="answer-input" type="text" autocomplete="off" spellcheck="false" placeholder="빈칸에 들어갈 영어 단어를 입력하세요" aria-label="${i + 1}번 정답">
    `;
    card.dataset.index = i;
    quiz.appendChild(card);
  });

  function updateTimer() {
    const min = Math.floor(remaining / 60).toString().padStart(2, '0');
    const sec = (remaining % 60).toString().padStart(2, '0');
    timer.textContent = `${min}:${sec}`;
    timer.classList.toggle('warning', remaining <= 300 && remaining > 60);
    timer.classList.toggle('danger', remaining <= 60);
  }

  function finishQuiz(timeUp = false) {
    if (finished) return;
    finished = true;
    submit.disabled = true;
    document.querySelectorAll('.answer-input').forEach(input => input.disabled = true);

    let score = 0;
    const answerRows = questions.map((q, i) => {
      const input = document.querySelectorAll('.answer-input')[i];
      const userAnswer = input.value.trim();
      const correct = normalized(userAnswer) === normalized(q.answer);
      if (correct) score++;
      return `<div class="answer-row ${correct ? 'correct' : 'wrong'}"><span class="answer-label">${i + 1}번</span> ${correct ? '✅ 정답' : '❌ 오답'} · 입력: <strong>${userAnswer || '(미입력)'}</strong> · 정답: <strong>${q.answer}</strong></div>`;
    }).join('');

    result.style.display = 'block';
    result.innerHTML = `<div class="score">${score} / ${questions.length}점</div><p style="margin-top:.5rem;color:#6b7280;">${timeUp ? '시간이 종료되어 자동 제출되었습니다.' : '시험이 제출되었습니다.'}</p><div class="answers">${answerRows}</div><a class="nav-back" href="index.html">← 레슨 목록으로 돌아가기</a>`;
    result.scrollIntoView({behavior:'smooth', block:'start'});
  }

  submit.addEventListener('click', () => finishQuiz(false));
  updateTimer();
  const timerId = setInterval(() => {
    if (finished) { clearInterval(timerId); return; }
    remaining--;
    updateTimer();
    if (remaining <= 0) {
      clearInterval(timerId);
      finishQuiz(true);
    }
  }, 1000);
});
