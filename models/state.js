module.exports = function (sequelize, DataTypes) {
   var State = sequelize.define("State", {

         room1: {
           type: DataTypes.BOOLEAN,
           defaultVaule: false
         },
         room2: {
           type: DataTypes.BOOLEAN,
           defaultVaule: false
         },
         room3: {
           type: DataTypes.BOOLEAN,
           defaultVaule: false
         },
         fightRoom1: {
           type: DataTypes.BOOLEAN,
           defaultVaule: false
         },
         fightRoom2: {
           type: DataTypes.BOOLEAN,
           defaultVaule: false
         },
         hasTorch: {
           type: DataTypes.BOOLEAN,
           defaultVaule: false
         },
         hasDagger: {
           type: DataTypes.BOOLEAN,
           defaultVaule: false
         },
         hasDust: {
           type: DataTypes.BOOLEAN,
           defaultVaule: false
         }
   });

   return State;
};
