const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller');
const autenticar = require('../../../middleware/autenticacao.middleware');

router.post('/', UsuarioController.cadastrar);
router.post('/login', UsuarioController.login);
router.get('/me', autenticar, UsuarioController.perfil);

module.exports = router;


 // Middleware de tratamento de erros (opcional, para erros não capturados)
 router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro Interno do Servidor', message: err.message});
 });
