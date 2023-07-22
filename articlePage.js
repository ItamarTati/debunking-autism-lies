const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("articleId");
const client = contentful.createClient({
    space: "s5cuf6g95aim",
    accessToken: "gUfLgLYgVDFaV1rhEdswegMrqIdWtyo8we6iUreDyzg",
    environment: "master",
});

function populatePage(article) {
    console.log(article)
}

function getArticle() {
    client
        .getEntry(articleId)
        .then((article) => populatePage(article))
        .catch(console.error);

}


getArticle()

