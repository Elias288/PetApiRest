const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get('/', userController.listarUsuario)
router.post('/', userController.createUser)

module.exports = router