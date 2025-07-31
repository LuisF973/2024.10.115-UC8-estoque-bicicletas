const express = require('express');
const app = express();
require('dotenv').config();
const { sequelize } = require('./src/config/configDB');

// Importação das rotas
const usuarioRoutes = require('./src/modulos/usuario/routes/usuario.route');
const categoriaRoutes = require('./src/modulos/categoria/routes/categoria.route');
const produtoRoutes = require('./src/modulos/produto/routes/produto.route');
const authRoutes = require('./src/modulos/autenticacao/routes/auth.route');



app.use(express.json());
const port = process.env.PORT || 3000;


// ROTAS COM PREFIXO '/api'
app.use('/api/usuarios', usuarioRoutes);       // Ex: /api/usuarios
app.use('/api', authRoutes);             // Ex: /api/login
// app.use('/api/usuarios/me', usuarioRoutes);          // Ex: /api/me (rota protegida, verifique autenticação)
app.use('/api/categorias', categoriaRoutes);   // Ex: /api/categorias
app.use('/api/produtos', produtoRoutes);        // Ex: /api/produtos



app.listen(port, async () => {
  try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');

  } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
  }
  console.log(`Servidor rodando na porta ${port}`);
});





