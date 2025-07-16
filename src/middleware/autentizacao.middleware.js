module.exports = function (...rolesPermitidos) {
    return (req, res, next) => {
      if (!rolesPermitidos.includes(req.usuarioRole)) {
        return res.status(403).json({ erro: 'Acesso não autorizado' });
      }
      next();
    };
  };
// Esse middleware verifica se o usuário tem uma das roles permitidas  

//Exemplo: autorizacao('admin') só deixa admins continuar
//Exemplo: autorizacao('admin', 'funcionario') deixa ambos