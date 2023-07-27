const client = contentful.createClient({
    space: "s5cuf6g95aim",
    accessToken: "gUfLgLYgVDFaV1rhEdswegMrqIdWtyo8we6iUreDyzg",
    environment: "master"
  });
  
  function getArticles() {
    client.getEntries({
      content_type: "blogPage"
    })
    .then((response) => {
      const articles = response.items;
      populateArticles(articles);
      document.querySelector("loader-component").style.display = "none";
    })
    .catch((error) => {
      console.log("Error fetching articles:", error);
      document.querySelector("loader-component").style.display = "none";
    });
  }
  
  function populateArticles(articles) {
    const getArticlesElement = document.getElementById("articles");
  
    articles.forEach(article => {
      const descriptionNode = article.fields.description.content[0].content[0];
      const description = descriptionNode.value;
      const title = article.fields.title;
      const imageLink = 'https:' + article.fields.image.fields.file.url;
      const articleId = article.sys.id;
      const articleCardElement = document.createElement("article-card");
      articleCardElement.setAttribute("image-src", imageLink);
      articleCardElement.setAttribute("class", "article");
      articleCardElement.setAttribute("title", title);
      articleCardElement.setAttribute("description", description);
      articleCardElement.setAttribute("article-id", articleId);
      getArticlesElement.appendChild(articleCardElement);
    });
  }
  
  getArticles();