const express = require('express');
const router = express.Router();
const ProdutoController = require('./ProdutoController');

// Listar produtos ativos
router.get('/ativos', ProdutoController.listarAtivos);

// Listar produtos desativados
router.get('/desativados', ProdutoController.listarDesativados);

// Buscar produto por ID
router.get('/:id', (req, res, next) => {
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(404).json({ sucesso: false, mensagem: 'Rota não encontrada.' });
  }
  next();
}, ProdutoController.buscarPorId);

// Cadastrar novo produto
router.post('/', ProdutoController.cadastrar);

// Atualizar produto
router.put('/:id', ProdutoController.atualizar);

module.exports = router;
