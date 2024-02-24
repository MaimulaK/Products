const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate({ comment, favorite, orderItem }) {
      this.hasMany(comment, { foreignKey: 'productId' });
      this.hasMany(favorite, { foreignKey: 'productId' });
      this.hasMany(orderItem, { foreignKey: 'productId' });
    }
  }
  product.init(
    {
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      nameItem: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      decription: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'product',
    }
  );
  return product;
};
