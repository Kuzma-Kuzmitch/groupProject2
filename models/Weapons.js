module.exports = function (sequelize, DataTypes) {
    var Weapons = sequelize.define("Weapons", {

        weapon_name: {
            type: DataTypes.STRING,
            allowNull: false,
        
          },
        weapon_text: {
            type: DataTypes.STRING,
         
          },
        weapon_effect: DataTypes.STRING ,
        weapon_stats:{
            type: DataTypes.INTEGER,
            allowNull: false,
         
          }


    });

    // Weapons.associate = function(models) {
    //     // We're saying that a Weapons should belong to an Author
    //     // A Weapons can't be created without an Author due to the foreign key constraint
    //     Weapons.belongsTo(models.Players, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };


    return Weapons;
};
