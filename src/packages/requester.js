module.exports = {requester};

const request = require('request');

function requester(URL) {
  return new Promise(async function(resolve, reject){
    try{
      request.get({
        "url": URL,
        "followAllRedirects": true,
        "headers": {
          "User-Agent": "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "referer": "https://www.google.com/",
          "accept": "application/json"
        }
      },function(error, response, body){
        body = JSON.parse(body)
        var i;
        for (i = 0; i< body.products.length; i++) {
          if (body.products[i].title != "Siège Gaming Embody Herman Miller X Logitech G - Noir") {
            break
          }
        }
        i--;
        // console.log(body.products[i].title);
        // console.log(body.products[i].tags.length);
        for (var a = 0; a < body.products[i].tags.length; a++){
          if(body.products[i].tags[a] == "product-type_Pre Order" || body.products[i].tags[a]  == "est_arrival-Envoi estimu00e9 mi-avril") {
            resolve(false)
          }
        }
        resolve(true)
      })
    } catch(err) {
      console.error("err: ", err);
    }
  })
}