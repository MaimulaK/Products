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
      {
        nameCategory: "Konopla",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cannabis_sativa.jpg/268px-Cannabis_sativa.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameCategory: "Krupa",
        img: "https://vos-mo.ru/upload/iblock/b5d/jwm4gc26onm1ug7x2zgpb4n5exi7col7/item_178.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
