const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get('/', userController.listarUsuario)
router.get('/:id', userController.findUserbyId)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)

module.exports = router