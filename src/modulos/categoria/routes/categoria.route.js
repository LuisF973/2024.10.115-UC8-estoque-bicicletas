const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/categoria.controller');
const autenticar = require('../../../middleware/autenticacao.middleware');
const autorizar = require('../../../middleware/autentizacao.middleware');


// Públicas
router.get('/', CategoriaController.listar);
router.get('/:id', CategoriaController.buscarPorId);

// Protegidas (JWT)
// Necessário autenticação e autorização
router.post('/', autenticar, autorizar(['admin']),CategoriaController.criar);
router.put('/:id', autenticar, autorizar(['admin']),CategoriaController.atualizar);
router.delete('/:id', autenticar, autorizar(['admin']), CategoriaController.excluir); // só admin pode excluir
module.exports = router;
