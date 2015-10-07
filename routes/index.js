var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                      message: 'First Page'});
});

/* GET ABOUT page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

module.exports = router;
