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

    // Load Lesson 2 stylesheet and content after the existing Lesson 1 content.
    const lesson2Styles = document.createElement('link');
    lesson2Styles.rel = 'stylesheet';
    lesson2Styles.href = 'lesson2.css';
    document.head.appendChild(lesson2Styles);

    const main = document.querySelector('main');
    if (main) {
        fetch('lesson2.html')
            .then(response => {
                if (!response.ok) throw new Error(`Lesson 2 load failed: ${response.status}`);
                return response.text();
            })
            .then(html => {
                main.insertAdjacentHTML('beforeend', html);
            })
            .catch(error => {
                console.error(error);
            });
    }
});
