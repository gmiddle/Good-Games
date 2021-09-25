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
      const columnMapping = {
        through: 'Shelf_Entry',  
        otherKey: 'gameShelfId',  
        foreignKey: 'gameId'
      }
    Game.belongsToMany(models.Game_Shelf, columnMapping);
    
    Game.hasMany(models.Review, {
      foreignKey: "gameId"
    });

    Game.hasMany(models.Genre_tag_join, {
      foreignKey: "gameId"
    });
    
    // Game.hasMany(models.Shelf_Entry, {
    //   foreignKey: "gameId"
    // })
  };
  return Game;
};
