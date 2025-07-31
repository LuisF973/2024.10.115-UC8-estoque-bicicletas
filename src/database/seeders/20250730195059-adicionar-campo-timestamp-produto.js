'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // IDs de usuários existentes (você deve pegar esses do banco real ou criar manualmente)
    const usuarios = [];

    const produtos = [
      {
        id: uuidv4(),
        usuarioId: 'f71b569f-2b7f-41b1-89b6-e64f53ba9402',
        produto_nome: 'Notebook Dell Inspiron',
        marca: 'Dell',
        quantidade: 10,
        preco_unitario: 3500.00,
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        usuarioId:'20db50e1-540f-4c0b-afaa-74d272cca43e',
        produto_nome: 'Mouse Logitech',
        marca: 'Logitech',
        quantidade: 50,
        preco_unitario: 120.99,
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        usuarioId:'83ca0e5c-0f9c-4c0c-ba20-865c3dd1dcf1' ,
        produto_nome: 'Monitor LG 24"',
        marca: 'LG',
        quantidade: 20,
        preco_unitario: 899.90,
        criado_em: new Date(),
        atualizado_em: new Date()
      }
    ];

    await queryInterface.bulkInsert('produto', produtos, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('produto', null, {});
  }
};
