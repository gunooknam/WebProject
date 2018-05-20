var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    user : req.user // get the user out of session and pass to template
  });
});

router.get('/welcome', function(req, res) {
  res.render('welcome', {
    user : req.user // get the user out of session and pass to template
  });


});

/*
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
  res.redirect('/');
}
*/

module.exports = router;
