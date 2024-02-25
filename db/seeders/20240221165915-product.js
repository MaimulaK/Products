/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        categoryId: 1,
        nameItem: "Palpi",
        decription: "Dermo-sok",
        price: 1234,
        count: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1,
        nameItem: "J7",
        decription: "Top za svoi babki",
        price: 12334,
        count: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        nameItem: "Копопля для души",
        decription: "Прямиком из авгана",
        price: 20,
        count: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        nameItem: "Копопля от Вазгена",
        decription: "Прямиком от Вазгена",
        price: 20,
        count: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3,
        nameItem: "Греча",
        decription: "Прямиком от Гречена",
        price: 2,
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3,
        nameItem: "Манка",
        decription: "Фииии",
        price: 0,
        count: 9999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
