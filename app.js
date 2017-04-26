var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

// app.get("/", function(req, res){
//   res.render("home");
// });
app.get("/results", function(req, res){
  request("https://yjm3zctbgh.execute-api.us-east-1.amazonaws.com/productionV1/products", function(error, response, body){
    if(!error && response.statusCode == 200) {
      var parsedData = JSON.parse(body) // we get the body object as string, so have to parse it and store in a variable
      res.send(parsedData["products"]);
    }
  });
});
app.listen(3000, function() {
  console.log('App has started on port 3000');
});
