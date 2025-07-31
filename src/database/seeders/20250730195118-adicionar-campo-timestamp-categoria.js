'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categorias = [
      {
        id: uuidv4(),
        nome: 'Informática',
        descricao: 'Produtos relacionados a computadores e acessórios.',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Telefonia',
        descricao: 'Produtos de telefonia fixa e móvel.',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Periféricos',
        descricao: 'Acessórios como teclado, mouse, impressoras etc.',
        criado_em: new Date(),
        atualizado_em: new Date()
      }
    ];

    await queryInterface.bulkInsert('categoria', categorias, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categoria', null, {});
  }
};
