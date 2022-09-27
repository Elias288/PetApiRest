const express = require('express');
const router = express.Router();

const petController = require('../controllers/pet.controller')

router.get('/', petController.findPets)
router.get('/:id', petController.findPetsByOwnId)
router.post('/', petController.addPetToUser)
 router.delete('/:id', petController.deletePet)

module.exports = router