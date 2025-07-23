const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');
const Categoria = require('../../categoria/models/categoria.models');

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  produto_nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  preco_unitario: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  }

  
},
{
  tableName: "produtos",
  createdAt: "criado_em",
  updatedAt: "atualizado_em",
});

module.exports = Produto;
