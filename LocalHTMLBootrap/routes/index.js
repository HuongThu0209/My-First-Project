var express = require('express');
var router = express.Router();

var database = require('../core/mysql');
db = new database();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LocalHTMLBootrap' });
});
module.exports = router;
