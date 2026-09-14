document.addEventListener('DOMContentLoaded', () => {
    const btnTranslation = document.getElementById('toggle-translation');
    const btnGrammar = document.getElementById('toggle-grammar');

    let isTranslationVisible = true;
    let isGrammarVisible = true;

    btnTranslation.addEventListener('click', () => {
        const translations = document.querySelectorAll('.translation-text');
        isTranslationVisible = !isTranslationVisible;

        translations.forEach(el => {
            el.style.display = isTranslationVisible ? 'block' : 'none';
        });

        btnTranslation.textContent = isTranslationVisible ? '해석 숨기기' : '해석 보기';
        btnTranslation.classList.toggle('bg-indigo-50', isTranslationVisible);
        btnTranslation.classList.toggle('text-indigo-700', isTranslationVisible);
        btnTranslation.classList.toggle('bg-indigo-600', !isTranslationVisible);
        btnTranslation.classList.toggle('text-white', !isTranslationVisible);
    });

    btnGrammar.addEventListener('click', () => {
        const grammars = document.querySelectorAll('.grammar-text');
        isGrammarVisible = !isGrammarVisible;

        grammars.forEach(el => {
            el.style.display = isGrammarVisible ? 'block' : 'none';
        });

        btnGrammar.textContent = isGrammarVisible ? '문법 숨기기' : '문법 보기';
        btnGrammar.classList.toggle('bg-amber-50', isGrammarVisible);
        btnGrammar.classList.toggle('text-amber-700', isGrammarVisible);
        btnGrammar.classList.toggle('bg-amber-500', !isGrammarVisible);
        btnGrammar.classList.toggle('text-white', !isGrammarVisible);
    });
});
