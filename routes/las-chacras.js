var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('las-chacras'); // views/las-chacras.hbs
});

module.exports = router;