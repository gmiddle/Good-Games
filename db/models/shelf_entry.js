'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf_Entry = sequelize.define('Shelf_Entry', {
    play_status: { type: DataTypes.STRING, allowNull: false },
    gameId: { type: DataTypes.INTEGER, allowNull: false },
    gameShelfId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});
  Shelf_Entry.associate = function(models) {
    // associations can be defined here
  };
  return Shelf_Entry;
};