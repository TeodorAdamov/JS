function getArticleGenerator(articles) {
    const content = document.querySelector('#content');

    const articleText = () => {
        const currentArticle = articles.shift();

        if (currentArticle !== undefined) {
            const article = document.createElement('article');
            article.textContent = currentArticle;
            content.appendChild(article);
        }
    }

    return articleText;
}
