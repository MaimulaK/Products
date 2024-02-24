"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    static associate({ Item, User }) {
      this.belongsTo(Item, { foreignKey: "item_id" });
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Reviews.init(
    {
      reviewText: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      date: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "Cascade",
      },
      item_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Items",
          key: "id",
        },
        onDelete: "Cascade",
      },
    },
    {
      sequelize,
      modelName: "Reviews",
    }
  );
  return Reviews;
};
