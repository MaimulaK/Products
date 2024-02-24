"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          name: "Black",
          image: "https://cs2.livemaster.ru/storage/3f/e4/76fb7b0a222d56624889eeeda2kc--odezhda-chernoe-seksualnoe-nizhnee-bele.jpg",
          description: "text",
          price: 10,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black",
          image: "https://img.joomcdn.net/7689ab679b3cff6c4116b6177166a132fc34172c_1024_1024.jpeg",
          description: "text",
          price: 10,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black",
          image: "https://i.pinimg.com/736x/59/cb/12/59cb12f1324e1efa9ea9bcb604c94d2f.jpg",
          description: "text",
          price: 10,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White",
          image: "https://basket-01.wbbasket.ru/vol88/part8884/8884969/images/big/17.webp",
          description: "text",
          price: 10,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White",
          image: "https://www.vitoricci.ru/images/132632891181004175-0.jpg",
          description: "text",
          price: 10,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White",
          image: "https://i.pinimg.com/736x/86/c5/4a/86c54a6188617bb64ee3162c48c1ee62.jpg",
          description: "text",
          price: 10,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Парадные",
          image: "https://incado.ru/upload/iblock/c08/336seeng3bl56va5aogqjtt7kr20a1sr.jpg",
          description: "text",
          price: 100,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
