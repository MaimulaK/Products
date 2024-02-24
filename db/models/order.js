const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, OrderItem }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.hasMany(OrderItem, { foreignKey: "orderId" });
    }
  }
  Order.init(
    {
      orderNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      orderDate: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      statusOeder: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
