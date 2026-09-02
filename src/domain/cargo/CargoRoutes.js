const express = require('express');
const router = express.Router();
const CargoController = require('./CargoController');

// Listar todos os cargos
router.get('/', CargoController.listar);

// Buscar cargo por ID
router.get('/:id', CargoController.buscarPorId);

// Cadastrar novo cargo
router.post('/', CargoController.cadastrar);

// Atualizar cargo
router.put('/:id', CargoController.atualizar);

// Excluir cargo
router.delete('/:id', CargoController.excluir);

module.exports = router;
