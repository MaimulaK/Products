"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Orders, Item }) {
      this.belongsTo(Orders, { foreignKey: "order_id" });
      this.belongsTo(Item, { foreignKey: "item_id" });
    }
  }
  OrderItem.init(
    {
      order_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Orders",
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
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
