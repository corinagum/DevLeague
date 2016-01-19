var Products   = require('./../db/products.js');
var path       = require('path');
var express    = require('express');
var router     = express.Router();
var fs         = require('fs');
var prettyjson = require( 'prettyjson' );
//NOTE WE MUST USE FS TO WRITE TO A FILE
//FS.APPENDFILE

//MIDDLEWARE
router.use(function(req, res, next) {
  var fileName = new Date();
  var day      = fileName.getDate();
  var month    = fileName.getMonth() + 1;
  var year     = fileName.getFullYear() + ".log";
  var fullDate = month + '.' + day + '.' + year;
  var zeHeader = req.headers;

  var prettyZeHeader = Object.keys(zeHeader).reduce(function ( string, c ){
    var prettyMeAlready = zeHeader[c];
    return string + c + " : " + zeHeader[c] + "\n";
  }, "");

  var logData = {
    METHOD : req.originalMethod,
    URL : req.originalUrl,
    TIMESTAMP : new Date(),
    HEADERS : prettyZeHeader
  };

  // this will take object and make it human readable
  var prettyLogData = Object.keys(logData).reduce(function ( string, c ){
    var prettyMeAlready = logData[c];

    return string + c + " : " + prettyjson.render(logData[c]) + "\n";
  }, "");

  //if file not created
  fs.appendFile( path.join(process.cwd(), 'logs', fullDate), prettyLogData, "utf8", function (err) {
    if (err) {
      return new Error( 'Can\'t write file!' );
    }
    next();
    });
  }); // end of fs.access ('../lo



// end middleware
router.route('/')
  .get(function(req, res) {
    res.render('products/index', {
      products: Products.all()
    });
  })

  .post(function (req, res) {
    Products.add(req.body, function(err) {
      if(err) return res.send( {success: false, message: err.message} );

      return res.redirect('/products/');
    });
  })
;

router.route('/new')
  .get(function(req, res) {
    res.render('products/new');
  });

router.route('/:id/edit')
  .get(function(req, res) {
    res.render('products/edit', {
      item: Products.getById( req.params.id )
    });
  });


router.route('/:id')
  .get(function(req, res) {
    res.render('products/single', {
      item: Products.getById( req.params.id )
    });
  })
  .put(function (req, res) {
    Products.editById( req.params.id, req.body, function(err) {
      if(err) return res.send({success: false, message: err.message});

      return res.redirect('/products/' + req.params.id);

    });
  })
  .delete(function (req, res) {
    Products.deleteById( req.params.id, function(err) {
      if(err) return res.send({success: false, message: err.message});

      return res.redirect('/products/');

    });
  })
  ;


module.exports = router;
