var Products = require('./../db/products.js');
var express = require('express');
var router = express.Router();

router.post( '/', function (req, res) {
  Products.add(req.body, res);
  res.send( {"success": true} );
});

router.put( '/:id', function (req, res) {
  Products.editByName(req.body, res);
  res.send( {"success": true});
});

// Products.all();


// Products.getByName('NAME');

// Products.editByName('NAME', {name: 'whatevs'});

module.exports = router;
