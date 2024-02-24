const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class orderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ product, order }) {
      this.belongsTo(product, { foreignKey: 'productId' });
      this.belongsTo(order, { foreignKey: 'orderId' });
    }
  }
  orderItem.init(
    {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        // references: {
        //   model: 'products',
        //   key: 'id',
        // },
        // onDelete: 'CASCADE',
      },
      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        // references: {
        //   model: 'orders',
        //   key: 'id',
        // },
        // onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'orderItem',
    }
  );
  return orderItem;
};
