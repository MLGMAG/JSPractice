"use strict";

let url = "http://api.zippopotam.us/us/90210";

let displayResponseInfo = function (response) {
  let paragraph = document.querySelector("#response");
  paragraph.textContent = response;
};

let logResponse = function () {
  console.log("Response:", this);
  console.log("Response text:", this.responseText);
  displayResponseInfo(this.responseText);
};

let request = new XMLHttpRequest();

// Events: progress, load, error, abort
request.addEventListener("load", logResponse);

request.open("GET", url);
request.send();
