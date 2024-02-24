"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Item }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Item, { foreignKey: "item_id" });
    }
  }
  Favorite.init(
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
          model: "Items",
          key: "id",
        },
        onDelete: "Cascade",
      },
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
