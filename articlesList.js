import { populateArticles} from './helper.js'

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

  getArticles();