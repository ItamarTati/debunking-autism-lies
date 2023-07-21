class ArticleCard extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["image-src", "title", "description"];
  }

  connectedCallback() {
    const imgSrc = this.getAttribute("image-src");
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    const articleId = this.getAttribute("article-id"); 
  
    this.innerHTML = `
      <a href="articlePage.html?articleId=${articleId}">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="${imgSrc}" alt="Card Image">
              <span class="card-title">${title}</span>
            </div>
            <div class="card-content">
              <p>${description}</p>
            </div>
            <div class="card-action">
              <a href="articlePage.html?articleId=${articleId}">Read Article</a>
            </div>
          </div>
        </div>
      </a>`;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "image-src") {
      const imgElement = this.querySelector("img");
      if (imgElement) {
        imgElement.src = newValue;
      }
    } else if (name === "title") {
      const titleElement = this.querySelector(".card-title");
      if (titleElement) {
        titleElement.textContent = newValue;
      }
    } else if (name === "description") {
      const descriptionElement = this.querySelector(".card-content p");
      if (descriptionElement) {
        descriptionElement.textContent = newValue;
      }
    }
  }
}

customElements.define("article-card", ArticleCard);