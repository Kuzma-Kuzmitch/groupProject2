module.exports = function(sequelize, DataTypes) {
  var players = sequelize.define("players", {
    player_name: DataTypes.STRING,
    player_attack: DataTypes.INTEGER ,
    player_hp : DataTypes.INTEGER
  });
  return players;
};
