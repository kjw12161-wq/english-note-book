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

    // 모든 페이지의 상단 바로가기 메뉴를 이 한 곳에서 관리합니다.
    // 앞으로 메뉴를 추가/수정할 때 각 HTML을 하나씩 고칠 필요가 없습니다.
    const nav = document.querySelector('.page-nav');
    if (nav) {
        const links = [
            ['index.html', '레슨 목록'],
            ['lesson1.html', 'Lesson 1'],
            ['lesson2.html', 'Lesson 2'],
            ['lesson3.html', 'Lesson 3'],
            ['lesson4.html', 'Lesson 4'],
            ['quiz.html', '단어시험']
        ];

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        nav.innerHTML = links.map(([href, label]) => {
            const active = href === currentPage ? ' class="active"' : '';
            return `<a href="${href}"${active}>${label}</a>`;
        }).join('');
    }
});
