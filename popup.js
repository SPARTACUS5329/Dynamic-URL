document.addEventListener("DOMContentLoaded", function () {
  //Getting access to the button
  var openPageButton = document.getElementById("open-page");
  //Getting access to the input field
  var urlInput = document.getElementById("url-text");
  //Setting the input field on focus once the extension is opened
  urlInput.focus();

  //Adding a function call to the buton whenever it is "clicked"
  openPageButton.addEventListener("click", function () {
    //Accessing the input field value
    let url = urlInput.value;
    //Creating the link injection
    let injection = url.slice(2, url.length);

    //Check for Reddit
    if (url[0] === "r") {
      window.open(`https://www.reddit.com/search/?q=${injection}`);
    }
    //Check for YouTube
    else if (url[0] === "y") {
      window.open(`https://www.youtube.com/results?search_query=${injection}`);
    }
    //Check for GitHub
    else if (url[0] === "g") {
      window.open(`https://github.com/${injection}`);
    }
    //Load README if anything else
    else {
      window.open(
        `https://github.com/SPARTACUS5329/Dynamic-URL/blob/main/README.md`
      );
    }
  });
});
