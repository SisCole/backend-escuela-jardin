'use strict';

const { create } = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        password: '$2y$12$IUYE4YGPv5Ll.5c1uM.y6eYyoJinFX7HhBFRVGOq/ITl4/vreubjW', // 123456
        email: 'joseluisjlgd123@gmail.com',
        idRole: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        password: '$2y$12$IUYE4YGPv5Ll.5c1uM.y6eYyoJinFX7HhBFRVGOq/ITl4/vreubjW', // 123456
        email: 'kevin@unitru.edu.pe',
        idRole: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
