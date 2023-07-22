class NavbarComponent extends HTMLElement {
  constructor() {
    super();
  }
    connectedCallback() {
      this.innerHTML = `
        <nav class="red">
          <div class="nav-wrapper">
            <a href="index.html" class="brand-logo">Neurodiversity</a>
            <a href="#" class="sidenav-trigger" data-target="mobile-nav">
              <i class="material-icons">menu</i>
            </a>
  
            <ul class="right hide-on-med-and-down">
              <li><a href="about.html">About</a></li>
              <li><a href="articlesList.html">Articles</a></li>
              <li><a href="help.html">Where To Get Help?</a></li>
            </ul>
          </div>
        </nav>
  
        <ul class="sidenav" id="mobile-nav">
          <li><a href="about.html">About</a></li>
          <li><a href="articlesList.html">Articles</a></li>
          <li><a href="help.html">Where To Get Help?</a></li>
        </ul>
      `;
    }
  }
  
  customElements.define('navbar-component', NavbarComponent);