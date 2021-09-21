'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false, unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Game_Shelf, {
      foreignKey: "userId"
    }),
    User.hasMany(models.Review, {
      foreignKey: "userId"
    })
  };
  return User;
};
