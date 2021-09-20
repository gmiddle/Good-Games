'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre_tag = sequelize.define('Genre_tag', {
    genre_tag_name: { type: DataTypes.STRING(20), allowNull: false },
  }, {});
  Genre_tag.associate = function(models) {
    // associations can be defined here
  };
  return Genre_tag;
};