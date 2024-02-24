"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate({ User, OrderItem }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.hasMany(OrderItem, { foreignKey: "order_id" });
    }
  }
  Orders.init(
    {
      orderStatus: {
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
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
