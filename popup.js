document.addEventListener("DOMContentLoaded", function () {
  var openPageButton = document.getElementById("open-page");
  var urlInput = document.getElementById("url-text");
  openPageButton.addEventListener("click", function () {
    let url = urlInput.value;
    if (url[0] === "r") {
      window.open(
        `https://www.reddit.com/search/?q=${url.slice(2, url.length)}`
      );
    } else if (url[0] === "y") {
      window.open(
        `https://www.youtube.com/results?search_query=${url.slice(
          2,
          url.length
        )}`
      );
    } else if (url[0] === "g") {
      window.open(`https://github.com/${url.slice(2, url.length)}`);
    } else {
      window.open(
        `https://github.com/SPARTACUS5329/Dynamic-URL/blob/main/README.md`
      );
    }
  });
});
