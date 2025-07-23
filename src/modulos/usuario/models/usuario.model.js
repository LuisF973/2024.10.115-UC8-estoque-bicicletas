const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'O nome é obrigatório.' }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: { msg: 'O email é obrigatório.' }
    }
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8],
        msg: 'A senha deve ter pelo menos 8 caracteres.'
      }
    }
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false
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
