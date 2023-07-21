const client = contentful.createClient({
  space: 's5cuf6g95aim',
  accessToken: 'gUfLgLYgVDFaV1rhEdswegMrqIdWtyo8we6iUreDyzg',
  environment: 'master'
});

// client.getEntries({
//   content_type: 'blogPage', 
// })
//   .then((response) => {
//     const articles = response.items;
//     console.log(articles);
//   })
//   .catch((error) => {
//     console.log('Error fetching articles:', error);
//   });

//   client.getEntry('something')
//   .then((entry) => console.log(entry))
//   .catch(console.error)

function getArticles() {
  client.getEntries({
  content_type: 'blogPage',  
  })
  .then((response) => {
    const articles = response.items;
    return populateArticles(articles)
  })
  .catch((error) => {
    console.log('Error fetching articles:', error);
  });
}

function populateArticles(articles) {
  const getArticlesElement = document.getElementById('articles') 

  articles.forEach(article => {
    const descriptionNode = article.fields.description.content[0].content[0];
    const description = descriptionNode.value;
    const title = article.fields.title;
    const imageLink = 'https:' + article.fields.image.fields.file.url;
    const articleCardElement = document.createElement('article-card');
    console.log(imageLink)
    articleCardElement.setAttribute('image-src', imageLink);
    articleCardElement.setAttribute('class', 'article');
    articleCardElement.setAttribute('title', title);
    articleCardElement.setAttribute('description', description);
    getArticlesElement.appendChild(articleCardElement);
  })
}

getArticles()

document.addEventListener("DOMContentLoaded", function () {
  const sidenavElement = document.querySelector("#mobile-nav");
  const sidenavOptions = {
    edge: "left",
    draggable: true,
  };
  // M is a global variable created in materialize/js/materialize.min.js, which is a bad practice :(
  const sidenavInstance = M.Sidenav.init(sidenavElement, sidenavOptions);
  sidenavInstance.close();
});

function updateBackgroundHeight() {
  const getContentSize = document.querySelectorAll(".content")[0].clientHeight;
  const backgroundElement = document.querySelectorAll(".background")[0];
  const getScreenSize = screen.height;
  const getBiggerSize = Math.max(getContentSize, getScreenSize);
  backgroundElement.style.height = getBiggerSize + "px";
}

window.addEventListener("load", function () {
  updateBackgroundHeight();
});

window.addEventListener("resize", function () {
  updateBackgroundHeight();
});
