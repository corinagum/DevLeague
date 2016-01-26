var express        = require('express');
var server         = express();
var products       = require('./routes/products.js');
var articles       = require('./routes/articles.js');
var methodOverride = require('method-override');
var bodyParser     = require('body-parser');
var promise        = require('bluebird');

var options = {
  promiseLib: promise //overriding the default promise library
};

var pgp = require('pg-promise')(options);
//configure database connection
var cn = {
  host : 'localhost', //default server
  port : 5432, //default port fro psql
  database : 'has_many_blogs', //database you are connecting to. CHANGE THIS WHEN STARTING FOR REALZY!
  user : 'rizhiaortega'
};
//create a new db in memory
var db = pgp(cn);

//select all of our users from the DB
db.query("select * from users where id = 50009", true)
  .then(function (data) {
      // success;
      console.log(data);
  })
  .catch(function (error) {
      // error;
  });

//sample insert
db.one('insert into users(id, username, first_name, last_name) values(default, $1, $2, $3) returning id',
  ['RIZZL2345', 'Riz', 'Ortega'])
  .then(function (data) {
      console.log(data.id); // print new user id;
  })
  .catch(function (error) {
      console.log("ERROR:", error); // print error;
  });

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

var app = server.listen(3000, function(){
  var host = app.address().address;
  var port = app.address().port;
  console.log('server online');
});