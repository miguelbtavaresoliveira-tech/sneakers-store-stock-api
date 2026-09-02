const express = require('express');
const router = express.Router();
const EstoqueController = require('./EstoqueController');

// Listar todas as entradas
router.get('/', EstoqueController.listar);

module.exports = router;
