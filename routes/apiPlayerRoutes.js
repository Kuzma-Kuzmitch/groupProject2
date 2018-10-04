var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/player/", function(req, res) {
    db.Players.findAll({}).then(function(dbData) {
      res.json(dbData);
      // res.render("player",dbData);
    });
  });

  

  // Create a new example
  app.post("/api/playercreate", function(req, res) {
    db.Players.create(
      {
        player_name: req.body.name,
        player_attack: req.body.playerAttack,
        player_hp: req.body.playerHp,
    }
    
    ).then(function(dbData) {
        res.json(dbData);
      });
  });



};
