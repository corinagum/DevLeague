var Products = require('./../db/products.js');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json({type: 'application/json' }));


router.post( '/', function (req, res) {
  Products.add(req.body, function(err) {
    if(err) return res.send( {success: false, message: err.message} );

    return res.send( {success: true} );
  });
});

router.put( '/:id', function (req, res) {
  Products.editById( req.params.id, req.body, function(err) {
    if(err) return res.send({success: false, message: err.message});

    return res.send({success: true});

  });
});

router.delete( '/:id', function (req, res) {
  Products.deleteById( req.params.id, function(err) {
    if(err) return res.send({success: false, message: err.message});

    return res.send({success: true});

  });
});


// Products.all();

// Products.getByName('NAME');


module.exports = router;
