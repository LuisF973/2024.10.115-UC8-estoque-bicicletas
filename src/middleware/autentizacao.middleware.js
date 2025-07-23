class AutorizacaoMiddleware {
    
  static autorizar(papeisPermitidos) {
    return (requisicao, resposta, proximo) => {
      const usuario = requisicao.usuario;

      if (!usuario || !papeisPermitidos.includes(usuario.role)) {
        return resposta.status(403).json({ msg: "Acesso não autorizado para este recurso!" });
      }
      proximo();
    };
  }
}

module.exports = AutorizacaoMiddleware;
