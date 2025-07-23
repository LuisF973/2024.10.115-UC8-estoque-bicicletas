// const express = require('express');
// const router = express.Router();
// const UsuarioController = require('../controllers/usuario.controller');
// const autenticar = require('../../../middleware/autenticacao.middleware');
// const AutorizacaoMiddleware = require('../../../middleware/autentizacao.middleware');


// router.post('/', UsuarioController.cadastrar);
// router.post('/login', UsuarioController.login);
// router.get('/me', autenticar, UsuarioController.perfil); // Rota protegida



// module.exports = router;


const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');

// Rotas públicas
router.post('/', UsuarioController.cadastrar);
router.post('/login', UsuarioController.login);

// Rota protegida
router.get('/me', AutenticacaoMiddleware.autenticarToken, UsuarioController.perfil);

module.exports = router;
