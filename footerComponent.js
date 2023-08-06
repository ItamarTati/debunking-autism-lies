class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="page-footer blue">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">The NeoVerse Blog</h5>
                <p class="grey-text text-lighten-4">
                  Welcome to "The NeoVerse Blog" a blog dedicated to exploring the power of differences and fostering inclusivity. We celebrate neurodiversity and embrace the uniqueness of every individual.
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">Contact Itamar Tati</a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">Contact Writer 1</a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">Discord</a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">Sign up for news</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              © ${new Date().getFullYear()} Embracing Neurodiversity Blog. All rights reserved.
              <a class="grey-text text-lighten-4 right" href="#!">Privacy Policy</a>
            </div>
          </div>
        </footer>
      `;
  }
}

customElements.define("footer-component", FooterComponent);