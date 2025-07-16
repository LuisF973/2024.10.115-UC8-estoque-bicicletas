const Usuario = require('../../usuario/models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthController {
  static async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) return res.status(401).json({ erro: 'Credenciais inválidas' });

      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      if (!senhaValida) return res.status(401).json({ erro: 'Credenciais inválidas' });

      const token = jwt.sign({ id: usuario.id, role: usuario.role }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async verificar(req, res) {
    return res.status(200).json({
      usuarioId: req.usuarioId,
      role: req.usuarioRole
    });
  }
}

module.exports = AuthController;
