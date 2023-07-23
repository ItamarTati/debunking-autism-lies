const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("articleId");
const client = contentful.createClient({
    space: "s5cuf6g95aim",
    accessToken: "gUfLgLYgVDFaV1rhEdswegMrqIdWtyo8we6iUreDyzg",
    environment: "master",
});

function populatePage(article) {
    console.log(article.fields)
    console.log(article.fields.title)
    console.log(article.fields.description)
    console.log(article.fields.body)
    console.log(article.fields.image)


  const title = article.fields.title;
  const description = article.fields.description.content[0].content[0].value;
  const articleContentElement = document.getElementById('articleContent');
  
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('blockquote');
  descriptionElement.textContent = description;

  articleContentElement.appendChild(titleElement);
  articleContentElement.appendChild(descriptionElement);

    if (article.fields.image && article.fields.image.fields) {
        const imageLink = 'https:' + article.fields.image.fields.file.url;
        const figureElement = document.createElement('figure')
        const imageElement = document.createElement('img');
        const figcaptionImageElement =  document.createElement('figcaption')
        imageElement.src = imageLink;
        imageElement.alt = article.fields.image.fields.title;
        imageElement.setAttribute('class', 'responsive-img')
        figcaptionImageElement.textContent = article.fields.image.fields.description
        articleContentElement.appendChild(figureElement);
        figureElement.appendChild(imageElement);
        figureElement.appendChild(figcaptionImageElement);
      }
}

function getArticle() {
    client
        .getEntry(articleId)
        .then((article) => populatePage(article))
        .catch(console.error);

}


getArticle()


