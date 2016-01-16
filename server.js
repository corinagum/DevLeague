var express = require('express');
var server = express();
var products = require('./routes/products.js');
// var articles = require('./routes/articles.js');

server.set('view engine', 'jade');
server.set('views', './templates/');

server.use('/products', products);
// server.use('/articles', articles);

var app = server.listen(3000, function(){
  var host = app.address().address;
  var port = app.address().port;
  console.log('server online');
});