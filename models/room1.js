module.exports = function(sequelize, DataTypes) {
  var Room1_Hub = sequelize.define("Room1_Hub", {
    room_disc : DataTypes.TEXT ,
    room_id : DataTypes.INTEGER , 
    response_one : DataTypes.TEXT ,
    response_one_one : DataTypes.TEXT ,
    response_one_two : DataTypes.TEXT ,
    response_one_two : DataTypes.TEXT ,
    response_one_two_one : DataTypes.TEXT ,
    response_one_two_two : DataTypes.TEXT ,
    response_one_two_three : DataTypes.TEXT ,
    response_one_two_four : DataTypes.TEXT ,
    response_one_three : DataTypes.TEXT ,
    response_one_three_one : DataTypes.TEXT
  });
  return Room1_Hub;
};
