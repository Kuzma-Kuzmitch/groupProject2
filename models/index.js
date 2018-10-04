"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;



 const Room1_Hub = sequelize.define('room1_hub', {
   room_disc : Sequelize.STRING ,
   room_id :  Sequelize.INTEGER ,
   response_one : Sequelize.TEXT ,
   response_one_one : Sequelize.TEXT ,
   response_one_two : Sequelize.TEXT ,
   response_one_two : Sequelize.TEXT ,
   response_one_two_one : Sequelize.TEXT ,
   response_one_two_two : Sequelize.TEXT ,
   response_one_two_three : Sequelize.TEXT ,
   response_one_two_four : Sequelize.TEXT ,
   response_one_three : Sequelize.TEXT ,
   response_one_three_one : Sequelize.TEXT
})
sequelize.models.Room1_Hub
module.exports = Room1_Hub;

sequelize.sync({
  force : true
}).then(function(){
  Room1_Hub.bulkCreate([
    {
      room_disc : "The light from the cracks in the ceiling is hardly enough to make out your own hands. You hear water dripping everywhere." ,
      id :1.1 ,
      response_one : " Continue forward, you fear no darkness!"  ,
      response_one_one : " You amble forward untill the sound of water increases, until it starts dripping on your heard. This is stickier than water, almost like saliva? The last sound you hear is a rush of hot steam in your ear and then only silence." ,
      response_one_two :" Feel around the floor for something, anything!" ,
      response_one_two :"Oddly enough you find everything you need to make a rudimentary torch. Wow, you're more skilled than you thought!" ,
      response_one_two_one :  "Head North" ,
      response_one_two_two :"Head South" ,
      response_one_two_three: "Head East" ,
      response_one_two_four : "Head west" ,
      response_one_three :"Cry out for help" ,
      response_one_three_one : "Nobody, or nothing, replies. "

    }
  ], {
ignoreduplicates : true
  }).then(function(){

  })
})
