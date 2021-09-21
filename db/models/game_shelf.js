'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game_Shelf = sequelize.define('Game_Shelf', {
    shelf_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Game_Shelf.associate = function(models) {
    Game_Shelf.belongsTo(models.User, {
      foreignKey: "userId"
    }),
    Game_Shelf.hasMany(models.Shelf_Entry, {
      foreignKey: "gameShelfId"
    })
  };
  return Game_Shelf;
};
