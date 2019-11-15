var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Remote Control", navBarTitle: "", hideHeader: true, hideFooter: true });
});

module.exports = router;