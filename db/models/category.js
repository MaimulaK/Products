const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Product }) {
      this.hasMany(Product, { foreignKey: "categoryId" });
    }
  }
  Category.init(
    {
      nameCategory: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
