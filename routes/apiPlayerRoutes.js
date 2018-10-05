var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/player/", function(req, res) {
    db.Players.findAll({}).then(function(dbData) {
      res.json(dbData);
      // res.render("player",dbData);
    });
  });

  app.get("/api/state", function(req, res) {
    db.State.findAll({
      where: {
        id: 1
      }
    }).then(function(data) {
      res.json(data)
    })
  });

  app.put("/api/state", function(req, res) {
    db.State.update({
        room1: req.body.room1,
        room2: req.body.room2,
        room3: req.body.room3,
        fightRoom1: req.body.fightRoom1,
        fightRoom2: req.body.fightRoom2,
        hasTorch: req.body.hasTorch,
        hasDagger: req.body.hasDagger,
        hasDust: req.body.hasDust
      },{
      where: {
        id: 1
    }})
  });

  app.post("/api/state", function(req, res) {
    db.State.create({
      room1: false,
      room2: false,
      room3: false,
      fightRoom1: false,
      fightRoom2: false,
      hasTorch: false,
      hasDagger: false,
      hasDust: false
    })
  .then(function(data){
    res.json(data)
  })
})



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
