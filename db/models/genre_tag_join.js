'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre_tag_join = sequelize.define('Genre_tag_join', {
    gameId: { type: DataTypes.INTEGER, allowNull: false },
    genreTagId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});
  Genre_tag_join.associate = function(models) {
    // associations can be defined here
  };
  return Genre_tag_join;
};