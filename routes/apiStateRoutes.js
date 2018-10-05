
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/state", function(req, res) {
   
    db.State.findAll({}).then(function(dbResponse) {

      res.json(dbResponse);
      
    });
  });


  app.put("/api/stateupdate", function(req, res) {
    db.State.update(
      {
     where: {
         id: req.body.id
     }
    }
    ).then(function(dbData) {
        res.json(dbData);
      });
  }); 

};
