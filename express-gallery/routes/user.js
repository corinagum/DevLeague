var express = require('express');
var router  = express.Router();
var db = require('./../models');

//MIDDLEWARE
// router.use(function(req,res,next) {
//   console.log('hey');
//   next(req,res);
// });

router.post('/', function(req,res) {
  console.log(req.body);
  db.User.create({ username: req.body.username})
    .then(function(user) {
      res.json(user);
    });
});

module.exports = router;