var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/player/1", function(req, res) {
    db.Player.findOne(req.body).then(function(dbresponse) {
      res.render("player",dbresponse);
    });
  });

  // Create a new example
  app.post("/api/player", function(req, res) {
    db.Player.create(req.body).then(function(dbresponse) {
        res.json(dbresponse);
      });
  });

};
