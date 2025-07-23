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


// ROTAS COM PREFIXO '/api'
app.use('/api/usuarios', usuarioRoutes);       // Ex: /api/usuarios
app.use('/api', authRoutes);             // Ex: /api/login
// app.use('/api/usuarios/me', usuarioRoutes);          // Ex: /api/me (rota protegida, verifique autenticação)
app.use('/api/categorias', categoriaRoutes);   // Ex: /api/categorias
app.use('/api/produtos', produtoRoutes);        // Ex: /api/produtos



// Rota padrão
app.get('/', (req, res) => {
  res.send('🚴 API Loja de Bicicletas rodando!');
});

// Conexão com o banco e inicialização
sequelize.sync({ alter: true }).then(() => {
  console.log('📦 Banco sincronizado com sucesso!');
  app.listen(3001, () => {
    console.log('🚀 Servidor rodando em http://localhost:3001');
  });
}).catch((error) => {
  console.error('❌ Erro ao conectar ao banco de dados:', error);
});



