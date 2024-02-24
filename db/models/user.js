"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Reviews, Like, Favorite, Orders }) {
      this.hasMany(Reviews, { foreignKey: "user_id" });
      this.hasMany(Like, { foreignKey: "user_id" });
      this.hasMany(Favorite, { foreignKey: "user_id" });
      this.hasMany(Orders, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      role: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      isAdmin: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
