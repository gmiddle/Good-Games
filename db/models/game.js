'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game_img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    developer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    timestamps: false
});
  Game.associate = function(models) {
    // associations can be defined here
    Game.hasMany(models.Review, {
      foreignKey: "gameId"
    }),
    Game.hasMany(models.Shelf_Entry, {
      foreignKey: "gameId"
    }),
    Game.hasMany(models.Genre_tag_join, {
      foreignKey: "gameId"
    })
  };
  return Game;
};
