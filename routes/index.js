var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Barrie' });
});

/* GET /about */
router.get('/about', (req, res) => {
  // create a list of categories in memory
  let categories = [{
    'name': 'Eat/Drink'
  },
  {
    'name': 'Shop'
  },
  {
    'name': 'Play'
  }]

  // load the about view, pass a title value and the list of categories for display
  res.render('about', { 
    title: 'About My Barrie',
    categories: categories
  })
})

module.exports = router;