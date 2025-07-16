const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const jwtSecret = process.env.JWT_SECRET;

class UsuarioController {
  static async cadastrar(req, res) {
    try {
      const { nome, email, senha, role } = req.body;
      const existente = await Usuario.findOne({ where: { email } });
      if (existente) return res.status(400).json({ erro: 'Email já cadastrado.' });

      const novoUsuario = await Usuario.create({ nome, email, senha, role });
      return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, senha } = req.body;
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) return res.status(401).json({ erro: 'Credenciais inválidas.', });

      const senhaValida = await bcrypt.compare(senha, usuario.senha); // 
      if (!senhaValida) return res.status(401).json({ erro: 'Credenciais inválidas.' });

      const token = jwt.sign(
        { id: usuario.id, role: usuario.role },
        process.env.JWT_SECRET, // Use o segredo do JWT definido no .env
        { expiresIn: '1h' }
      );

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async perfil(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.usuarioId, {
        attributes: ['id', 'nome', 'email', 'role']
      });
      if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado.' });
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = UsuarioController;
