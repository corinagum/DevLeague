var Articles = require('./../db/articles.js');
var express = require('express');
var router = express.Router();

//MIDDLEWARE
router.use(function(req, res, next) {
  console.log('Time:', Date.now());
  next();
});


// end middleware

router.route('/')
  .get(function(req, res) {
    res.render('articles/index', {
      art: Articles.all()
    });
  })

  .post(function (req, res) {
    console.log(req.body.title);
    Articles.add(req.body, function(err) {
      if(err) return res.send( {success: false, message: err.message} );

      return res.redirect('/articles/');
    });
  })
;

router.route('/new')
  .get(function(req,res) {
    res.render('articles/new');
  });

router.route('/:title/edit')
  .get(function(req, res) {
    console.log(req.params.title);
    res.render('articles/edit', {
      articles: Articles.getByTitle( req.params.title )
    });
  });

router.route('/:title')
  .get(function(req, res) {
    console.log('HEYLO', req.params.title);
    res.render('articles/single', {
      articles: Articles.getByTitle( req.params.title)
    });
  })

  .put(function (req, res) {
    console.log(req.body);
    console.log("PARAMS",req.params.title);

    Articles.editByTitle( req.params.title, req.body, function(err) {
      if(err) return res.send({success: false, message: err.message});

      return res.redirect('/articles/' + req.body.title);
    });
  })

  .delete(function (req, res) {
    Articles.deleteByTitle( req.params.title, function(err) {
      if(err) return res.send({success: false, message: err.message});

      return res.redirect('/articles/');
  });
})
;



module.exports = router;
