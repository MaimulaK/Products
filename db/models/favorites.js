const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, product }) {
      this.belongsTo(user, { foreignKey: 'userId' });
      this.belongsTo(product, { foreignKey: 'productId' });
    }
  }
  favorites.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        // references: {
        //   model: 'users',
        //   key: 'id',
        // },
        // onDelete: 'CASCADE',
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        // references: {
        //   model: 'products',
        //   key: 'id',
        // },
        // onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'favorites',
    }
  );
  return favorites;
};
