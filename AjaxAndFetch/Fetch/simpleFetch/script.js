let url = "http://api.zippopotam.us/us/90210";

let logResponse = function (response) {
  console.log(response);
  return response;
};

let displayResponseInfo = function (response) {
  let responseJSON = JSON.stringify(response);
  let paragraph = document.querySelector("#response");
  paragraph.textContent = responseJSON;
  return response;
};

fetch(url)
  .then((response) => response.json())
  .then((data) => logResponse(data))
  .then((data) => displayResponseInfo(data));
