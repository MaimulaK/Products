/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        orderNumber: 1,
        orderDate: 14012024,
        statusOeder: 'No',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderNumber: 2,
        orderDate: 15012024,
        statusOeder: 'Yes',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
