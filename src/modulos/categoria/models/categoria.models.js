const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "categoria",
  createdAt: "criado_em",
  updatedAt: "atualizado_em",
});

module.exports = Categoria;