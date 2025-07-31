'use strict';

const { sequelize } = require('../../config/configDB');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('usuario', 
      { id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        
        nome: {
          type: Sequelize.STRING(100),
          allowNull: false,
          
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
         
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
          
        },
        role: {
          type: Sequelize.ENUM('admin', 'funcionario'),
          allowNull: false
        }
      });
      await queryInterface.addIndex('usuario', ['email']);
      await queryInterface.addIndex('usuario', ['role']);
      await queryInterface.addIndex('usuario', ['id']);
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('usuario');
     
  }
};
