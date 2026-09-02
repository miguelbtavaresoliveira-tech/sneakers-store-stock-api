const express = require('express');
const router = express.Router();
const EntradaController = require('./EntradaController');

// Listar todas as entradas
router.get('/', EntradaController.listar);

// Buscar entrada por ID
router.get('/:id', EntradaController.buscarPorId);

// Cadastrar nova entrada
router.post('/', EntradaController.cadastrar);

module.exports = router;
