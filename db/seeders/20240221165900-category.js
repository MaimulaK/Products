/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        nameCategory: "SOk",
        img: "https://media.istockphoto.com/id/156152863/ru/фото/свежие-фруктовые-соки.jpg?s=1024x1024&w=is&k=20&c=vhq2Wt5NCqCKmJH5OqHjLn5zYyQ6afYqyK_p0MYFmO8=",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
