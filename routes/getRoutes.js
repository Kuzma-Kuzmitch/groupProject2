
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/room1", function(req, res) {
      res.render("room1");
  });

  app.get("/room2", function(req, res) {
      res.render("room2");
  });

  app.get("/room3", function(req, res) {
      res.render("room3");
  });

  // GET route for getting all of the posts
  // app.get("/api/weapons", function(req, res) {
  //
  //   db.Weapons.findAll({}).then(function(dbResponse) {
  //
  //     res.json(dbResponse);
  //       // res.render("weapons",dbResponse);
  //   });
  // });

  // Get route for retrieving a single post
  // app.get("/api/getweapon/:name", function(req, res) {
  //
  //   db.Weapons.findOne({
  //     where: {
  //       weaponName: req.params.name
  //     }
  //   }).then(function(dbResponse) {
  //     res.json(dbResponse);
  //   });
  // });
  //
  // app.post("/api/weaponcreate", function(req, res) {
  //   db.Weapons.create(
  //     {
  //     weaponName: req.body.weaponName,
  //     weaponDescription: req.body.weaponDescription,
  //     weaponEffect: req.body.weaponEffect,
  //     weaponStats: req.body.weaponStats
  //   }
  //
  //   ).then(function(dbData) {
  //       res.json(dbData);
  //     });
  // });

};
