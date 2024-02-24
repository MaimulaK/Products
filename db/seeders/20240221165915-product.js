/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        categoryId: 1,
        nameItem: 'Palpi',
        decription: 'Dermo-sok',
        price: 1234,
        count: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1,
        nameItem: 'J7',
        decription: 'Top za svoi babki',
        price: 12334,
        count: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
