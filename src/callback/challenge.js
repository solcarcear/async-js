let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error ' + urlApi);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(API, function(error1, data1){
  if(error1){
    return console.log(error1);
  }else{
    fetchData(`${API}${data1.results[0].id}`, function(error2, data2){
      if(error2){
        return console.log(error2);
      }else{
        fetchData(data2.origin.url, function(error3, data3){
          if(error3){
            return console.log(error3)
          }else{
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
          }
        });
      }
    });
  }
});
