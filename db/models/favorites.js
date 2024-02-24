const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate({ User, Product }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Product, { foreignKey: "productId" });
    }
  }
  Favorites.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: "Favorites",
    }
  );
  return Favorites;
};
