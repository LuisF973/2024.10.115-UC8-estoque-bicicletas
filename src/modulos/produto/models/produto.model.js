const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');
const Categoria = require('../../categoria/models/categoria.models');
const Usuario = require('../../usuario/models/usuario.model');

const Produto = sequelize.define('Produtos', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  usuarioId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  produto_nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING(100),
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
}, {
  tableName: "produtos",
  createdAt: "criado_em",
  updatedAt: "atualizado_em",
});


module.exports = Produto;
