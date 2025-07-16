const Produto = require('../models/produto.model');
const Categoria = require('../../categoria/models/categoria.models');


class ProdutoController {
  static async listar(req, res) {
    try {
      const produtos = await Produto.findAll({ include: ['categoria'] });
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id, { include: ['categoria'] });
      if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async criar(req, res) {
    try {
      const { produto_nome, marca, quantidade, preco_unitario, categoriaId } = req.body;

      const categoria = await Categoria.findByPk(categoriaId);
      if (!categoria) return res.status(400).json({ erro: 'Categoria inválida' });

      const produto = await Produto.create({
        produto_nome,
        marca,
        quantidade,
        preco_unitario,
        categoriaId
      });

      return res.status(201).json(produto);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { produto_nome, marca, quantidade, preco_unitario, categoriaId } = req.body;

      const produto = await Produto.findByPk(id);
      if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });

      if (categoriaId) {
        const categoria = await Categoria.findByPk(categoriaId);
        if (!categoria) return res.status(400).json({ erro: 'Categoria inválida' });
      }

      await produto.update({
        produto_nome: produto_nome ?? produto.produto_nome,
        marca: marca ?? produto.marca,
        quantidade: quantidade ?? produto.quantidade,
        preco_unitario: preco_unitario ?? produto.preco_unitario,
        categoriaId: categoriaId ?? produto.categoriaId
      });

      return res.status(200).json(produto);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async excluir(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);
      if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });

      await produto.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = ProdutoController;
