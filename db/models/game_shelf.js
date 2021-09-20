'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game_Shelf = sequelize.define('Game_Shelf', {
    shelf_name: { type: DataTypes.STRING(30), allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});
  Game_Shelf.associate = function(models) {
    // associations can be defined here
    
  };
  return Game_Shelf;
};