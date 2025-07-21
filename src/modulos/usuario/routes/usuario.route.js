const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller');
const autenticar = require('../../../middleware/autenticacao.middleware');

router.post('/', UsuarioController.cadastrar);
router.post('/login', UsuarioController.login);
router.get('/me', autenticar, UsuarioController.perfil); // Rota protegida

module.exports = router;
