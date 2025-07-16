const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const autenticar = require('../../../middleware/autenticacao.middleware');

// POST /api/login  → realiza o login e retorna JWT
router.post('/', AuthController.login);

// GET /api/login/verificar  → retorna dados do token se for válido
router.get('/verificar', autenticar, AuthController.verificar);

module.exports = router;
