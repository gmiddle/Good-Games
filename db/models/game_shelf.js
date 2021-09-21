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
    Game_Shelf.hasMany(models.User, {
      foreignKey: "userId"
    })
  };
  return Game_Shelf;
};
