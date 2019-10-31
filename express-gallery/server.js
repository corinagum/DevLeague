var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var db          = require('./models');
var gallery     = require('./routes/gallery.js');
//for later use?
var user        = require('./routes/user.js');
var postRoute   = require('./routes/post.js');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/users', user);
app.use('/post', postRoute);
app.use('/gallery', gallery);

app.listen(3000, function() {
  console.log('Server online on port 3000');
  db.sequelize.sync();
});