var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: "Remote Control", navBarTitle: "Genius SW-HF5.1 3000 Remote Control" });
});

module.exports = router;