const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, orderItem }) {
      this.belongsTo(user, { foreignKey: 'userId' });
      this.hasMany(orderItem, { foreignKey: 'orderId' });
    }
  }
  order.init(
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
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'order',
    }
  );
  return order;
};
