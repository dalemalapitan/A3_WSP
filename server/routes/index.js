var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET About page. */
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About us' });
});
/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});
/* GET contactus page. */
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us' });
});

module.exports = router;
