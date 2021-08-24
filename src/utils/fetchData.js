let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (urlApi) => {
  return new Promise((response, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = (event) => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? response(JSON.parse(xhttp.responseText))
          : reject(new Error("Error " + urlApi));
      }
    };
    xhttp.send();
  });
};

module.exports= fetchData;