"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Black",
          image: "https://ae03.alicdn.com/kf/S6b309237c23e4a9aa696c0cd14756dc7o.jpg",
          
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White",
          image: "https://images.prom.ua/3974448944_w640_h640_3974448944.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "For Him",
          image: "https://cdn2.static1-sima-land.com/items/831483/0/700-nw.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
