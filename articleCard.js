const template = document.createElement("template");
template.innerHTML = `
  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img alt="Card Image">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>`;

class ArticleCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = template.innerHTML;
  }

  static get observedAttributes() {
    return ["image-src"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "image-src") {
      const imgElement = this.querySelector("img");
      if (imgElement) {
        imgElement.src = newValue;
      }
    }
  }
}

customElements.define("article-card", ArticleCard);
