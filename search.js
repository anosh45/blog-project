// function searchArticles() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.home-article');

    articles.forEach(article => {
        const title = article.querySelector('h3').innerText.toLowerCase();
        const author = article.querySelector('div').innerText.toLowerCase();

        if (title.includes(input) || author.includes(input)) {
            article.style.display = 'flex'; // Show matching articles
        } else {
            article.style.display = 'none'; // Hide non-matching articles
        }
    });

