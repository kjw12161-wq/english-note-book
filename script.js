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
});
