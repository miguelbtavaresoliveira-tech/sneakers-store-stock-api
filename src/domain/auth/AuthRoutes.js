const express = require('express');
const AuthController = require('./AuthController');
const router = express.Router();

// Autenticação
router.post('/login', AuthController.login);
router.post('/refresh-token', AuthController.refresh);
router.post('/logout', AuthController.logout);

module.exports = router;