module.exports = function (sequelize, DataTypes) {
    var Players = sequelize.define("Players", {

        player_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        player_attack: {
            type: DataTypes.INTEGER,
            allowNull: false,
        
          },
        player_hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
          
          },
     


    });

    // Players.associate = function(models) {
    //     // Associating Players with Posts
    //     // When an Players is deleted, also delete any associated Posts
    //     Players.hasMany(models.Items, {
    //       onDelete: "cascade"
    //     });
    //   };

    //   Players.associate = function(models) {
    //     // Associating Players with Posts
    //     // When an Players is deleted, also delete any associated Posts
    //     Players.hasMany(models.Weapons, {
    //       onDelete: "cascade"
    //     });
      // };



    return Players;
};
