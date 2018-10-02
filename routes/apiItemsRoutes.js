
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/items", function(req, res) {
   
    db.Items.findAll({}).then(function(dbResponse) {
      res.json(dbResponse);
        // res.render("items",dbResponse);
    });
  });

  // Get route for retrieving a single Items
  app.get("/api/get/item/:id", function(req, res) {

    db.Items.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbResponse) {
      res.json(dbResponse);
    });
  });


  app.post("/api/items/create", function(req, res) {
    db.Items.create(
      {
        item_name: req.body.name,
       item_text: req.body.itemText,
        item_effect: req.body.itemEffect,
        item_stats: req.body.itemStats,
        PlayerId: req.body.pID
      }
    
    ).then(function(dbData) {
        res.json(dbData);
      });
  });



};
