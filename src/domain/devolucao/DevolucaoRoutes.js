const express = require('express');
const router = express.Router();
const DevolucaoController = require('./DevolucaoController');

// Listar todas as devoluções
router.get('/', DevolucaoController.listar);

// Buscar devolução por ID
router.get('/:id', DevolucaoController.buscarPorId);

// Cadastrar nova devolução
router.post('/', DevolucaoController.cadastrar);

module.exports = router;
