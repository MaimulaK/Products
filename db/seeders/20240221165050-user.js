/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Jane Doe',
        email: '123@fdfd',
        password: 'password123',
        role: 'Papkis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Doffe',
        email: '12f3@fdfffd',
        password: 'passwoff3',
        role: 'Papkiffs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
