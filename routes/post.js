var express = require('express');
// var Post    = require('./../models/Post.js');
var db      = require('./../models');
var router  = express.Router();

router.get('/', function(req,res) {
  db.Post
    .create({
      author: 'Hemingway',
      link: 'www.google.com',
      description: 'we made it'
    })
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

router.get('/', function(req,res) {
  Post
    .findOne({
      id:1
    })
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

module.exports = router;