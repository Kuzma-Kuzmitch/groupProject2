
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

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


};
