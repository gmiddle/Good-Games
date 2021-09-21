'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre_tag_join = sequelize.define('Genre_tag_join', {
    gameId: { type: DataTypes.INTEGER, allowNull: false },
    genreTagId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});
  Genre_tag_join.associate = function(models) {
    // associations can be defined here
    Genre_tag_join.belongsTo(models.Game, {
      foreignKey: "gameId"
    }),
    Genre_tag_join.belongsTo(models.Genre_tag, {
      foreignKey: "genreTagId"
    })
  };
  return Genre_tag_join;
};