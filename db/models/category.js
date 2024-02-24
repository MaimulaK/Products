const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(product) {
      this.hasMany(product, { foreignKey: 'categoryId' });
    }
  }
  category.init(
    {
      nameCategoty: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'category',
    }
  );
  return category;
};
