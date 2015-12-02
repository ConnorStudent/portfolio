/*  index.js
    Connor Hall
    portfolio.azurewebsites.net
    index all the router.gets
    */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Connor Hall Portfolio',
                      message: 'My Portfolio'});
});

/* GET ABOUT page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

/* GET Education page */
router.get('/education', function(req, res, next) {
   res.render('education'); 
});

/* GET Qualities page */
router.get('/qualities', function(req, res, next) {
   res.render('qualities'); 
});

/* GET Work Expierence page */
router.get('/workexpierence', function(req, res, next) {
   res.render('workexpierence'); 
});

/* GET Safety page */
router.get('/safety', function(req, res, next) {
   res.render('safety'); 
});

/* GET Volunteer Expierence page */
router.get('/volunteerexpierence', function(req, res, next) {
   res.render('volunteerexpierence'); 
});

/* GET Contact page */
router.get('/contact', function(req, res, next) {
   res.render('contact'); 
});

/* GET Project page */
router.get('/Projects', function(req, res, next) {
   res.render('Projects'); 
});

module.exports = router;
