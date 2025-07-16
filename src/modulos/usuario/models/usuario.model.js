const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 100] // Senha deve ter entre 6 e 100 caracteres
    }
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'funcionario'
  }
},
{
  tableName: "usuarios",
  createdAt: "criado_em",
  updatedAt: "atualizado_em",
}
);

Usuario.beforeCreate(async (usuario) => {
  const salt = await bcrypt.genSalt(10);
  usuario.senha = await bcrypt.hash(usuario.senha, salt);
});


module.exports = Usuario;
