
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/get/items", function(req, res) {
   
    db.Post.findAll({}).then(function(dbResponse) {
        res.render("items",dbResponse);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/get/items/:id", function(req, res) {

    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbResponse) {
      res.json(dbResponse);
    });
  });


};
