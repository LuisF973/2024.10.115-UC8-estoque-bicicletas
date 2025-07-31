'use strict';

const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const senhaCriptografada = async (senha) => {
      const salt = await bcrypt.genSalt(10);
      return await bcrypt.hash(senha, salt);
    };

    const usuarios = [
      {
        id: uuidv4(),
        nome: 'João Silva',
        email: 'joao@email.com',
        senha: await senhaCriptografada('senha123'),
        role: 'admin',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Maria Oliveira',
        email: 'maria@email.com',
        senha: await senhaCriptografada('maria456'),
        role: 'admin',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Carlos Souza',
        email: 'carlos@email.com',
        senha: await senhaCriptografada('carlos789'),
        role: 'funcionario',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Ana Lima',
        email: 'ana@email.com',
        senha: await senhaCriptografada('ana321'),
        role: 'funcionario',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Pedro Santos',
        email: 'pedro@email.com',
        senha: await senhaCriptografada('pedro654'),
        role: 'funcionario',
        criado_em: new Date(),
        atualizado_em: new Date()
      }
    ];

    await queryInterface.bulkInsert('usuario', usuarios, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
