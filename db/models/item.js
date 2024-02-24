"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ Category, Reviews, Like, Favorite, OrderItem }) {
      this.hasMany(Reviews, { foreignKey: "item_id" });
      this.hasMany(Like, { foreignKey: "item_id" });
      this.hasMany(Favorite, { foreignKey: "item_id" });
      this.hasMany(OrderItem, { foreignKey: "item_id" });
      this.belongsTo(Category, { foreignKey: "category_id" });
    }
  }
  Item.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Category",
          key: "id",
        },
        onDelete: "Cascade",
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
