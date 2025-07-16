const bcrypt = require('bcryptjs');
const Categoria = require('../../categoria/models/categoria.models');


class CategoriaController {
  static async listar(req, res) {
    try {
      const categorias = await Categoria.findAll();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);
      if (!categoria) return res.status(404).json({ erro: 'Categoria não encontrada' });
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async criar(req, res) {
    try {
      const { nome, descricao } = req.body;
      const existente = await Categoria.findOne({ where: { nome } });
      if (existente) return res.status(400).json({ erro: 'Nome de categoria já existe' });

      const novaCategoria = await Categoria.create({ nome, descricao });
      return res.status(201).json(novaCategoria);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;

      const categoria = await Categoria.findByPk(id);
      if (!categoria) return res.status(404).json({ erro: 'Categoria não encontrada' });

      categoria.nome = nome ?? categoria.nome;
      categoria.descricao = descricao ?? categoria.descricao;
      await categoria.save();

      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async excluir(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);
      if (!categoria) return res.status(404).json({ erro: 'Categoria não encontrada' });

      await categoria.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = CategoriaController;
