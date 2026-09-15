document.addEventListener('DOMContentLoaded', () => {
  // Lesson 3: 10문제 + Lesson 4: 10문제
  // 본문에서 핵심 내용 이해에 중요하거나 암기할 가치가 높은 어휘를 선정했습니다.
  const questions = [
    // Lesson 3
    {lesson:'Lesson 3', n:1, sentence:'We make many personal choices / in our lives, / from who to have lunch with / to what career to ________.', answer:'pursue', ko:'우리는 많은 개인적인 선택을 한다 / 우리 삶에서, / 누구와 점심을 먹을지부터 / 어떤 진로를 추구할지까지.'},
    {lesson:'Lesson 3', n:3, sentence:'Group decision-making is not as simple / as our personal choices, / as it involves numerous voices / with ________ opinions.', answer:'differing', ko:'집단의 의사결정은 간단하지 않다 / 우리의 개인적인 선택만큼, / 그것이 수많은 목소리를 포함하기 때문에 / 다른 의견을 가진.'},
    {lesson:'Lesson 3', n:7, sentence:'When they asked for advice / from Ms. Akers, the council’s advisor, / she ________ them / not to use the familiar voting method, / but to try something different instead.', answer:'encouraged', ko:'그들이 조언을 구했을 때 / 학생회 고문인 Akers 선생님에게, / 그녀는 그들에게 권장했다 / 익숙한 투표 방식을 사용하지 말고, / 대신 뭔가 다른 것을 시도해 보라고.'},
    {lesson:'Lesson 3', n:10, sentence:'Each of the 20 council members / was given a voting slip / and instructed to write down the options / in order of ________.', answer:'preference', ko:'20명의 학생회 임원 각각은 / 투표용지를 받았다 / 그리고 선택지들을 적으라고 지시받았다 / 선호하는 순서대로.'},
    {lesson:'Lesson 3', n:12, sentence:'Voters are given several options, / and ________ gets the most first-preference votes / wins.', answer:'whichever', ko:'유권자들에게는 여러 선택지가 주어진다, / 그리고 가장 많은 1순위 표를 얻는 것이 무엇이든 / 이긴다.'},
    {lesson:'Lesson 3', n:13, sentence:'Neither the second nor third preference / matters at all, / so they are ________.', answer:'ignored', ko:'2순위도 3순위도 / 전혀 중요하지 않다, / 그래서 그것들은 무시된다.'},
    {lesson:'Lesson 3', n:16, sentence:'However, only 8 out of 20 council members / chose the charity concert / as their first preference, / which equaled 40% of the total ________.', answer:'votes', ko:'하지만, 20명의 학생회 임원 중 겨우 8명만이 / 자선 콘서트를 선택했다 / 그들의 1순위로, / 그리고 그것은 전체 표의 40%와 같았다.'},
    {lesson:'Lesson 3', n:17, sentence:'The alternative vote method / takes voters’ second and third choices / into ________.', answer:'account', ko:'대안 투표제는 / 유권자들의 2순위와 3순위 선택을 / 고려한다.'},
    {lesson:'Lesson 3', n:23, sentence:'After the first round, / the option with the fewest votes is eliminated, / and its supporters’ next choices / are ________ to their ballots.', answer:'added', ko:'첫 번째 라운드 후 / 가장 적은 표를 받은 선택지는 제거되고, / 그 지지자들의 다음 선택이 / 그들의 투표에 추가된다.'},
    {lesson:'Lesson 3', n:30, sentence:'The Condorcet method can identify / the option that would defeat every other option / in a series of one-on-one ________.', answer:'comparisons', ko:'콩도르세 방법은 식별할 수 있다 / 다른 모든 선택지를 이길 선택지를 / 일대일 비교의 연속에서.'},

    // Lesson 4
    {lesson:'Lesson 4', n:1, sentence:'On her way to a study group meeting, / Liz accidentally dropped her laptop on the street, / seriously ________ it.', answer:'damaging', ko:'스터디 그룹 모임에 가는 길에, / Liz는 실수로 길에 노트북을 떨어뜨렸다, / 그리고 그것을 심하게 파손시켰다.'},
    {lesson:'Lesson 4', n:3, sentence:'In this case, / getting rid of the old one / and purchasing a new one / might seem like a more reasonable ________.', answer:'option', ko:'이 경우, / 낡은 것을 버리고 / 새것을 구매하는 것이 / 더 합리적인 선택처럼 보일지도 모른다.'},
    {lesson:'Lesson 4', n:5, sentence:'Due to toxic materials / contained in these products, / such as lead, / e-waste is a serious health and environmental ________.', answer:'hazard', ko:'독성 물질 때문에 / 이 제품들에 포함된, / 납과 같은, / 전자폐기물은 건강과 환경에 심각한 위험 요소이다.'},
    {lesson:'Lesson 4', n:7, sentence:'Experts predict / that by 2030, / the amount of e-waste generated annually / will have ________ in just 16 years.', answer:'doubled', ko:'전문가들은 예측한다 / 2030년쯤에는, / 매년 발생하는 전자폐기물의 양이 / 불과 16년 만에 두 배가 될 것이라고.'},
    {lesson:'Lesson 4', n:10, sentence:'For example, / a device may be difficult to ________, / or its manufacturer may require / that it be brought to an official service center / to be fixed.', answer:'disassemble', ko:'예를 들어, / 기기를 분해하기 어려울 수도 있다, / 혹은 제조사가 요구할 수도 있다 / 수리받기 위해서는 공식 서비스 센터로 가져와야 한다고.'},
    {lesson:'Lesson 4', n:13, sentence:'The right-to-repair movement is trying / to solve these problems / by promoting ________ / that states the following:', answer:'legislation', ko:'수리할 권리 운동은 노력하고 있다 / 이러한 문제들을 해결하려고 / 법률 제정을 촉진함으로써 / 다음과 같이 명시하는:'},
    {lesson:'Lesson 4', n:17, sentence:'In January 2021, / the French government passed a bill / that requires / that every manufacturer include a "repairability ________" / on five categories of electronic devices and electrical appliances:', answer:'index', ko:'2021년 1월, / 프랑스 정부는 법안을 통과시켰다 / 요구하는 / 모든 제조사가 ' + "'" + '수리 용이성 지수' + "'" + '를 포함해야 한다고 / 5개 범주의 전자 기기 및 가전제품에:'},
    {lesson:'Lesson 4', n:19, sentence:'The index takes into account several ________, / including the availability of repair information, / the ease of disassembly, / and the price of spare parts.', answer:'elements', ko:'그 지수는 몇 가지 요소를 고려한다, / 수리 정보의 이용 가능성, / 분해의 용이성, / 그리고 여분 부품의 가격을 포함하여.'},
    {lesson:'Lesson 4', n:26, sentence:'By providing spaces / where people can learn, / Repair Cafés enable individuals / to maintain their devices / and extend their life ________.', answer:'spans', ko:'공간을 제공함으로써 / 사람들이 배울 수 있는, / 수리 카페는 개인들이 ~할 수 있게 해 준다 / 기기를 유지보수하고 / 수명을 연장할 수 있게.'},
    {lesson:'Lesson 4', n:30, sentence:'Even more importantly, / it is a future in which people will generate far less e-waste, / making our planet a cleaner, healthier place for ________.', answer:'everyone', ko:'훨씬 더 중요한 것은, / 그것은 사람들이 전자폐기물을 훨씬 덜 발생시킬 미래라는 것이다, / 우리 지구를 모두에게 더 깨끗하고 더 건강한 곳으로 만들면서.'}
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
      <div class="sentence">${q.sentence.replace('______', '<span class="blank">&nbsp;</span>')}</div>
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
