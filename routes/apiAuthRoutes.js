
var db = require("../models");
var authController = require('../controllers/authController');


// Routes
// =============================================================
module.exports = function(app,passport) {



 
    app.get("/signup", authController.signup);
  
    app.get('/signin', authController.signin);
    
    app.get('/logout',authController.logout);

    app.get('/dashboard',isLoggedIn, authController.dashboard);
    
    app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/dashboard',

      failureRedirect: '/signup'
    }



));

function isLoggedIn(req, res, next) {
 
  if (req.isAuthenticated())
   
      return next();
       
  res.redirect('/signin');

}

};