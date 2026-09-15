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
        const existing = [...nav.querySelectorAll('a')].some((link) => link.getAttribute('href') === 'lesson3.html');
        if (!existing) {
            const lesson3 = document.createElement('a');
            lesson3.href = 'lesson3.html';
            lesson3.textContent = 'Lesson 3';
            nav.appendChild(lesson3);
        }
    }
});
