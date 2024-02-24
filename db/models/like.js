"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ Item, User }) {
      this.belongsTo(Item, { foreignKey: "item_id" });
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Like.init(
    {
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
          model: "Item",
          key: "id",
        },
        onDelete: "Cascade",
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
