const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("articleId");
const client = contentful.createClient({
  space: "s5cuf6g95aim",
  accessToken: "gUfLgLYgVDFaV1rhEdswegMrqIdWtyo8we6iUreDyzg",
  environment: "master",
});

function populatePage(article) {
  const title = article.fields.title;
  const description = article.fields.description.content[0].content[0].value;
  const articleContentElement = document.getElementById("articleContent");

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const descriptionElement = document.createElement("blockquote");
  descriptionElement.textContent = description;

  articleContentElement.appendChild(titleElement);
  articleContentElement.appendChild(descriptionElement);

  if (article.fields.image && article.fields.image.fields) {
    const imageLink = "https:" + article.fields.image.fields.file.url;
    const figureElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    const figcaptionImageElement = document.createElement("figcaption");
    figureElement.style.display = "flex";
    figureElement.style.alignItems = "center";
    figureElement.style.flexDirection = "column";
    imageElement.src = imageLink;
    imageElement.alt = article.fields.image.fields.title;
    imageElement.setAttribute("class", "responsive-img");
    figcaptionImageElement.textContent =
      article.fields.image.fields.description;
    articleContentElement.appendChild(figureElement);
    figureElement.appendChild(imageElement);
    figureElement.appendChild(figcaptionImageElement);
  }

  const horizontalLine = document.createElement("hr");
  articleContentElement.appendChild(horizontalLine);

  const articleContent = article.fields.body.content;
  for (const content of articleContent) {
    switch (content.nodeType) {
      case "paragraph":
        const paragraphElement = document.createElement("p");
        paragraphElement.setAttribute("class", "flow-text");
        paragraphElement.textContent = content.content[0].value;
        articleContentElement.appendChild(paragraphElement);
        break;

      case "ordered-list":
        const orderedListElement = document.createElement("ol");

        for (const listItem of content.content) {
          const listItemElement = document.createElement("li");
          listItemElement.setAttribute("class", "flow-text");
          listItemElement.textContent = listItem.content[0].content[0].value;
          orderedListElement.appendChild(listItemElement);
        }

        articleContentElement.appendChild(orderedListElement);
        break;

      case "embedded-asset-block":
        if (content.data && content.data.target && content.data.target.fields) {
          const imageLink = "https:" + content.data.target.fields.file.url;
          const figureElement = document.createElement("figure");
          const imageElement = document.createElement("img");
          const figcaptionImageElement = document.createElement("figcaption");

          imageElement.src = imageLink;
          imageElement.alt = content.data.target.fields.title;
          imageElement.setAttribute("class", "responsive-img");
          figcaptionImageElement.textContent =
            content.data.target.fields.description;

          articleContentElement.appendChild(figureElement);
          figureElement.appendChild(imageElement);
          figureElement.appendChild(figcaptionImageElement);
        }
        break;

      default:
        break;
    }
  }
}

function getArticle() {
  document.querySelector("loader-component").style.display = "block";

  client
    .getEntry(articleId)
    .then((article) => {
      populatePage(article);
      document.querySelector("loader-component").style.display = "none";
    })
    .catch((error) => {
      console.log("Error fetching articles:", error);
      document.querySelector("loader-component").style.display = "none";
    });
}

getArticle();
