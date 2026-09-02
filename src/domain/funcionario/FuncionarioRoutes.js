const express = require('express');
const router = express.Router();
const FuncionarioController = require('./FuncionarioController');

// Listar todos os funcionários
router.get('/', FuncionarioController.listarFuncionarios);

// Buscar funcionário por ID
router.get('/:id', FuncionarioController.buscarPorId);

// Cadastrar novo funcionário
router.post('/', FuncionarioController.cadastrar);

// Atualizar funcionário
router.put('/:id', FuncionarioController.atualizar);

// Excluir funcionário
router.delete('/:id', FuncionarioController.excluir);

module.exports = router;