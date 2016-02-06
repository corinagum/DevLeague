var Mongoose = require('mongoose');
Mongoose.connect('monngodb://localhost/test');

exports.Mongoose = Mongoose;

var Mongoose = require('mongo.js');

Mongoose.Schema({
  name : String,
  tail: Boolean
});

var CatModel = Mongoose.model('Cat', CatSchema);
