var Products = require('./../db/products.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.render('products/index', {
      products: Products.all()
    });
  })

  .post(function (req, res) {
    console.log(req.body.id);
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
