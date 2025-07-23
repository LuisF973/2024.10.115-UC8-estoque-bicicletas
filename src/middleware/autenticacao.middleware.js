const jwt = require("jsonwebtoken");

class AutenticacaoMiddleware{
    static autenticarToken(req, res, next) {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1]; 
    
        if (!token) {
          return res.status(401).json({ msg: "Token de acesso não fornecido!" });
        }
    // Verifica se a chave secreta está definida
    if (!process.env.SECRET_KEY) {
      return res.status(500).json({ msg: "Chave secreta não configurada no servidor!" });
    }
        jwt.verify(token, process.env.SECRET_KEY, (err, usuario) => {
          if (err) {
            return res.status(403).json({ msg: "Token de acesso não fornecido!" });
          }
    
          req.usuario = usuario; 
          next();
        });
      }
}

// Exporte apenas o método middleware, não a classe inteira
module.exports = AutenticacaoMiddleware;