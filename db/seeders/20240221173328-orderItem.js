/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("OrderItems", [
      {
        productId: 2,
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        orderId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderItems", null, {});
  },
};
