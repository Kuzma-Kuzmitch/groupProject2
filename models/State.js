module.exports = function (sequelize, DataTypes) {
    var State = sequelize.define("State", {

          Room1: {
            type: DataTypes.BOOLEAN,
          },
          Room2: {
            type: DataTypes.BOOLEAN,
          },
          Room3: {
            type: DataTypes.BOOLEAN,
          },
          fightRoom1: {
            type: DataTypes.BOOLEAN,
          },
          fightRoom2: {
            type: DataTypes.BOOLEAN,
          },
          hasTorch: {
            type: DataTypes.BOOLEAN,
          },
          hasDagger: {
            type: DataTypes.BOOLEAN,
          },

    
    });

    return State;
};
