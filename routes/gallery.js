var express = require('express');
var router  = express.Router();
var db = require('./../models');

router.route('/')
  .get(function(req, res) {
    Gallery.all()
    .then(function(data) {

    })
  })
  .post(function(req, res) {

  });

module.exports = router;