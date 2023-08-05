import { populateArticles} from './helper.js'
// it is considered bad to leave api keys in public code that could be accessed by hackers
// contentful.createClient is a global variables
const client = contentful.createClient({
  space: "s5cuf6g95aim",
  accessToken: "gUfLgLYgVDFaV1rhEdswegMrqIdWtyo8we6iUreDyzg",
  environment: "master",
});

function getArticles() {
  document.querySelector("loader-component").style.display = "block";

  client
    .getEntries({
      content_type: "blogPage",
      limit: 4
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
