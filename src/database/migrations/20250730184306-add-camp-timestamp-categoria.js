'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('categoria',"criado_em",
      { 
         type: Sequelize.DATE,
          allowNull: false,
         defaultValue: Sequelize.NOW
      });
     await queryInterface.addColumn('categoria',"atualizado_em", 
      { 
         type: Sequelize.DATE,
          allowNull: true,
         defaultValue: Sequelize.NOW

      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('categoria', 'criado_em');
    await queryInterface.removeColumn('categoria', 'atualizado_em');
  }
};
