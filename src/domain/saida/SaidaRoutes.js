const express = require('express');
const router = express.Router();
const SaidaController = require('./SaidaController');

// Listar todas as saídas
router.get('/', SaidaController.listar);

// Buscar saída por ID
router.get('/:id', SaidaController.buscarPorId);

// Cadastrar nova saída
router.post('/', SaidaController.cadastrar);

module.exports = router;
