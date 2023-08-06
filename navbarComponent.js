class NavbarComponent extends HTMLElement {
  constructor() {
    super();
  }
    connectedCallback() {
      this.innerHTML = `
        <nav class="blue">
          <div class="nav-wrapper">
            <a href="index.html" class="brand-logo">NeoVerse</a>
            <a href="#" class="sidenav-trigger" data-target="mobile-nav">
              <i class="material-icons">menu</i>
            </a>
  
            <ul class="right hide-on-med-and-down">
              <li><a href="about.html">About</a></li>
              <li><a href="articlesList.html">Articles</a></li>
<!--              <li><a href="help.html">Where To Get Help?</a></li>-->
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
  
  customElements.define('navbar-component', NavbarComponent);