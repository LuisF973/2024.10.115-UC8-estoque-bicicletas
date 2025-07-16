const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produto.controller');
const autenticar = require('../../../middleware/autenticacao.middleware');
const autorizar = require('../../../middleware/autentizacao.middleware');

// Públicas
router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);

// Protegidas
router.post('/', autenticar, autorizar(['admin']),ProdutoController.criar);
router.put('/:id', autenticar, autorizar(['admin']),ProdutoController.atualizar);
router.delete('/:id', autenticar, autorizar(['admin']), ProdutoController.excluir); // só admin pode excluir

module.exports = router;
