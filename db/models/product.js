const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Comment, Favorites, OrderItem ,Category}) {
      this.hasMany(Comment, { foreignKey: "productId" });
      this.hasMany(Favorites, { foreignKey: "productId" });
      this.hasMany(OrderItem, { foreignKey: "productId" });
      this.belongsTo(Category, { foreignKey: "categoryId" });
    }
  }
  Product.init(
    {
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "CASCADE",
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
      modelName: "Product",
    }
  );
  return Product;
};
