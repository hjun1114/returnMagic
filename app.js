var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("assets"));
app.set("view engine", "ejs");


app.get("/results", function(req, res){
  var query = req.query.search;
  var url = "https://yjm3zctbgh.execute-api.us-east-1.amazonaws.com/productionV1/products?=" + query ;
  // What I tried to do is to fetch the data that are only realted to the searched products
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200) {
      var parsedData = JSON.parse(body)
    }
  });
});
app.get("/", function(req, res){
  res.render("search");
});
app.listen(3000, function() {
  console.log('App has started on port 3000');
});
