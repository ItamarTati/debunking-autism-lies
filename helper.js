export  function populateArticles(articles) {
    const getArticlesElement = document.getElementById("articles");

    articles.forEach(article => {
        const descriptionNode = article.fields.description.content[0].content[0];
        const description = descriptionNode.value;
        const title = article.fields.title;
        const imageLink = 'https:' + article.fields.image.fields.file.url;
        const articleId = article.sys.id;
        const articleCardElement = document.createElement("article-card");
        addArticleToPage(getArticlesElement, articleCardElement, imageLink, title, description, articleId)
    });
}

function addArticleToPage(getArticlesElement, articleCardElement, imageLink, title, description, articleId) {
    articleCardElement.setAttribute("image-src", imageLink);
    articleCardElement.setAttribute("class", "article");
    articleCardElement.setAttribute("title", title);
    articleCardElement.setAttribute("description", description);
    articleCardElement.setAttribute("article-id", articleId);
    getArticlesElement.appendChild(articleCardElement);
}