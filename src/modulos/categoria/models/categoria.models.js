const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const Categoria = sequelize.define('Categoria', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  tableName: "categorias",
  createdAt: "criado_em",
  updatedAt: "atualizado_em",
});

module.exports = Categoria;
