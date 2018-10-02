module.exports = function (sequelize, DataTypes) {
    var Items = sequelize.define("Items", {

        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
         
          },
        item_text: {
            type: DataTypes.STRING,
          },
        item_effect: DataTypes.STRING ,
        item_stats:{
            type: DataTypes.INTEGER,
            allowNull: false,
          }


    });

    // Items.associate = function(models) {
    //     // We're saying that a Items should belong to an Author
    //     // A Items can't be created without an Author due to the foreign key constraint
    //     Items.belongsTo(models.Players, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };


    return Items;
};
