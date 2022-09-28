const mongoose = require('mongoose')
const petSchema = require('../schemas/pet.schema')
const userSchema = require('../schemas/user.schema')

exports.findPets = (req, res) => {
    petSchema.find()
    .populate('own')
    .exec((err, pets) => {
        if(err) throw err
        res.send({ pets: pets })
    })
}

exports.findPetsById = (req, res) => {
    petSchema.findById(req.params.id)
    .populate('own')
    .exec((err, pets) => {
        if(err) throw err
        res.send({ pets: pets})
    })
}

exports.addPetToUser = (req, res) => {
    userSchema.findById(req.body.owner, (err, user) =>{
        if(err) throw err

        const pet = new petSchema({
            name: req.body.name,
            type: req.body.type,
            race: req.body.race,
            age: req.body.age,
            own: user._id,
        })

        user.pets = [ ...user.pets, pet.id ]
        user.save()
        
        pet.save((err, pet) => {
            if(err) throw err
            res.send(pet)
        })
    })

}

exports.deletePet = (req, res) => {
    petSchema.findByIdAndDelete(req.params.id, (err, pet) => {
        if(err) throw err
        
        if(pet){
            userSchema.findByIdAndUpdate(pet.own,
                { $pullAll: { pets: [pet._id] } },
                { new: true }
            ).exec()
        }
        
        res.send(pet)
    })
}