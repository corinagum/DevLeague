// var Articles = require('db/articles.js');

// //return entire collection:
// Articles.all();

// //add new article to collection:
// Articles.add({/*...*/});

// // returns correct object from collection

// Articles.getByTitle('TITLE');

// //find article in collection by title - update article based on object ... etc.
// Articles.editByTitle('TITLE', {title: "blahblah"});


var Articles = require('./../db/articles.js');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json({type: 'application/json' }));


router.post( '/', function (req, res) {
  Articles.add(req.body, function(err) {
    if(err) return res.send( {success: false, message: err.message} );

    return res.send( {success: true} );
  });
});

router.put( '/:title', function (req, res) {
  Articles.editByTitle( req.params.title, req.body, function(err) {
    if(err) return res.send({success: false, message: err.message});

    return res.send({success: true});

  });
});

router.delete( '/:title', function (req, res) {
  Articles.deleteByTitle( req.params.title, function(err) {
    if(err) return res.send({success: false, message: err.message});

    return res.send({success: true});

  });
});



module.exports = router;
