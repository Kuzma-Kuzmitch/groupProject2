
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/weapons", function(req, res) {
   
    db.Post.findAll({}).then(function(dbResponse) {

      res.json(dbResponse);
        // res.render("weapons",dbResponse);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/get/weapons/:id", function(req, res) {

    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbResponse) {
      res.json(dbResponse);
    });
  });

  app.post("/api/weaponscreate", function(req, res) {
    db.Weapons.create(
      {
        weapon_name: req.body.name,
        weapon_text: req.body.weaponText,
        weapon_effect: req.body.weaponEffect,
        weapon_stats: req.body.weaponStats
    }
    
    ).then(function(dbData) {
        res.json(dbData);
      });
  });

};
