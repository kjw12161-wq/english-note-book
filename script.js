document.addEventListener('DOMContentLoaded', () => {
    const btnTranslation = document.getElementById('toggle-translation');
    const btnGrammar = document.getElementById('toggle-grammar');

    if (btnTranslation) {
        let isTranslationVisible = true;
        btnTranslation.addEventListener('click', () => {
            document.querySelectorAll('.translation-text').forEach((el) => {
                el.style.display = isTranslationVisible ? 'none' : 'block';
            });
            isTranslationVisible = !isTranslationVisible;
            btnTranslation.textContent = isTranslationVisible ? '해석 숨기기' : '해석 보기';
        });
    }

    if (btnGrammar) {
        let isGrammarVisible = true;
        btnGrammar.addEventListener('click', () => {
            document.querySelectorAll('.grammar-text').forEach((el) => {
                el.style.display = isGrammarVisible ? 'none' : 'block';
            });
            isGrammarVisible = !isGrammarVisible;
            btnGrammar.textContent = isGrammarVisible ? '문법 숨기기' : '문법 보기';
        });
    }

    // Keep Lesson navigation consistent across all lesson pages.
    const nav = document.querySelector('.page-nav');
    if (nav) {
        const lesson3Exists = [...nav.querySelectorAll('a')].some((link) => link.getAttribute('href') === 'lesson3.html');
        if (!lesson3Exists) {
            const lesson3 = document.createElement('a');
            lesson3.href = 'lesson3.html';
            lesson3.textContent = 'Lesson 3';
            nav.appendChild(lesson3);
        }

        const lesson4Exists = [...nav.querySelectorAll('a')].some((link) => link.getAttribute('href') === 'lesson4.html');
        if (!lesson4Exists) {
            const lesson4 = document.createElement('a');
            lesson4.href = 'lesson4.html';
            lesson4.textContent = 'Lesson 4';
            nav.appendChild(lesson4);
        }
    }
});
