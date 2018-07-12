var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bk = require('./bk');



router.route('/books').post(function (req, res) {
  var k = new bk();
  k.book_name = req.body.book_name;
  k.book_author = req.body.book_author;
  k.book_price = req.body.book_price;
  k.location = req.body.location;
  k.no_of_pages = req.body.no_of_pages;
  k.edition = req.body.edition;
  k.save(function (err) {
      if (err) {
          res.send(err);
      }
      res.send({ message: 'Book Created !' })
  })
});

router.route('/books').get(function (req, res) {
  bk.find(function (err, books) {
      if (err) {
          res.send(err);
      }
      res.send(books);
  });
});

router.route('/books/:book_id').get(function (req, res) {

  bk.findById(req.params.book_id, function (err, bk) {
      if (err)
          res.send(err);
      res.json(bk);
  });
});

router.route('/books/:book_id').put(function (req, res) {

  bk.findById(req.params.book_id, function (err, bk) {
      if (err) {
          res.send(err);
      }
      bk.book_name = req.body.book_name;
      bk.book_author = req.body.book_author;
      bk.book_price = req.body.book_price;
      bk.location = req.body.location;
      bk.no_of_pages = req.body.no_of_pages;
      bk.edition = req.body.edition;
      bk.save(function (err) {
          if (err)
              res.send(err);

          res.json({ message: 'Book updated!' });
      });

  });
});

router.route('/books/:book_id').delete(function (req, res) {

  bk.remove({ _id: req.param.book_id }, function (err, bk) {
      if (err) {
          res.send(err);
      }
      res.json({ message: 'Book deleted' });
  })
});

router.route('/books/:location').get(function (req, res) {

    bk.find({ location: req.param.location }, function (err, bk) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Books for the desired location are displayed' });
        
        bk.save(function (err) {
          if (err)
              res.send(err);
  
          res.json({ message: 'Book Saved to the Database.!!' });
      });
  
    })
    
  });


    

module.exports = router;