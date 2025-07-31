'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('produto',"criado_em",
      { 
         type: Sequelize.DATE,
          allowNull: false,
         defaultValue: Sequelize.NOW
      });
     await queryInterface.addColumn('produto',"atualizado_em", 
      { 
         type: Sequelize.DATE,
          allowNull: true,
         defaultValue: Sequelize.NOW

      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('produto', 'criado_em');
    await queryInterface.removeColumn('produto', 'atualizado_em');
  }
};
