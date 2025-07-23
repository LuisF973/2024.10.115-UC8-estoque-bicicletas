const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/categoria.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizacaoMiddleware = require('../../../middleware/autentizacao.middleware');
const autorizar = AutorizacaoMiddleware.autorizar;



// Públicas
router.get('/', CategoriaController.listar);
router.get('/:id', CategoriaController.buscarPorId);

// Protegidas (JWT)
// Necessário autenticação e autorização
router.post('/', AutenticacaoMiddleware.autenticarToken, autorizar(['admin']), CategoriaController.criar);
router.put('/:id', AutenticacaoMiddleware.autenticarToken, autorizar(['admin']), CategoriaController.atualizar);
router.delete('/:id', AutenticacaoMiddleware.autenticarToken, autorizar(['admin']), CategoriaController.excluir); // só admin pode excluir
/*
Caminhos das rotas disponíveis:

POST    http://localhost:3001/categoria/           // Criar nova categoria (admin)
PUT     http://localhost:3001/categoria/:id        // Atualizar categoria (admin)
DELETE  http://localhost:3001/categoria/:id        // Excluir categoria (admin)
*/
module.exports = router;
