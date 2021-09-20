'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: { type: DataTypes.STRING, allowNull: false },
    game_img: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING(280), allowNull: false },
    developer: { type: DataTypes.STRING, allowNull: false },
    publisher: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    release_date: { type: DataTypes.STRING, allowNull: false }
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};