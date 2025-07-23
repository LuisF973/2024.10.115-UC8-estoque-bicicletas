const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produto.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizacaoMiddleware = require('../../../middleware/autentizacao.middleware');


// Públicas
router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);

// Protegidas
router.post('/', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['admin']), ProdutoController.criar); // Updated to use AutorizacaoMiddleware
router.put('/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['admin', 'funcionario']), ProdutoController.atualizar); // só admin e funcionário podem atualizar
router.delete('/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['admin']), ProdutoController.excluir); // só admin pode excluir
/*
Caminhos das rotas disponíveis:

GET     http://localhost:3001/produto/           // Listar todos os produtos
GET     http://localhost:3001/produto/:id        // Buscar produto por ID
POST    http://localhost:3001/produto/           // Criar novo produto (admin)
PUT     http://localhost:3001/produto/:id        // Atualizar produto (admin, funcionario)
DELETE  http://localhost:3001/produto/:id        // Excluir produto (admin)
*/
module.exports = router;
