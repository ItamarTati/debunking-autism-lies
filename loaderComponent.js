class LoaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      `;

    this.style.display = "flex";
    this.style.justifyContent = "center";
    this.style.alignItems = "center";
    this.style.height = "100vh";
  }
}

customElements.define("loader-component", LoaderComponent);
