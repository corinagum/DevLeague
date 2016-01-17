var express = require('express');
var server = express();
var products = require('./routes/products.js');
var articles = require('./routes/articles.js');
var methodOverride = require('method-override');
var bodyParser     = require('body-parser');

server.use(bodyParser.urlencoded({ extended: true }));

server.set('view engine', 'jade');
server.set('views', './templates/');

server.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

server.use('/products', products);
server.use('/articles', articles);

// NOTE: when using req.body, you must fully parse the request body
//       before you call methodOverride() in your middleware stack,
//       otherwise req.body will not be populated.


var app = server.listen(3000, function(){
  var host = app.address().address;
  var port = app.address().port;
  console.log('server online');
});