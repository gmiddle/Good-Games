'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: {
      type: DataTypes.NUMERIC(2, 1),
      allowNull: false
    },
    review: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    spoiler_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {
      foreignKey: "userId"
    }),
    Review.belongsTo(models.Game, {
      foreignKey: "gameId"
    })
  };
  return Review;
};
