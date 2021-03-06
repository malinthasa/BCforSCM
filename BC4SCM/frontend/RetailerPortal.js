var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var productService = require('./../fabcar/javascript/productInfo');

// Running Server Details.
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Retialer app listening at %s:%s Port", host, port)
});


app.get('/RetrailerView', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/getItemInfo'  method='post' name='form1'>";
  html += "Item ID:</p><input type= 'text' name='itemid'>";
  html += "<input type='submit' value='submit'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});

app.post('/getItemInfo', urlencodedParser, function (req, res){
  details = productService.getProductDetails()
  var reply='';
  reply += "Item Details" + req.body.itemid;
  reply += details;
  res.send(reply);
 });
