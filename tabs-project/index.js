const tabs = document.querySelectorAll('.tabs'); // Select tab containers
const btns = document.querySelectorAll('.btn'); 
const articles = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        const id = e.target.dataset.id;
        if (id) {
            btns.forEach(function (btn) {
                btn.classList.remove('live');
            });
            e.target.classList.add('live');
            articles.forEach(function (article) {
                article.classList.remove('live');
            });
            const element = document.getElementById(id);
            element.classList.add('live');
        }
    });
});

        