const mongoose = require('mongoose')
const petSchema = require('../schemas/pet.schema')
const userSchema = require('../schemas/user.schema')

exports.findPets = (req, res) => {
    petSchema.find((err, pets) => {
        if(err) throw err
        res.send({ pets: pets })
    })
}

exports.findPetsByOwnId = (req, res) => {
    petSchema.find({ 'own' : req.params.id}, (err, pets) => {
        if(err) throw err
        res.send({ pets: pets})
    })
}

exports.addPetToUser = (req, res) => {
    userSchema.findById(req.body.userId, (err, user) =>{
        if(err) throw err

        const pet = new petSchema({
            name: req.body.name,
            type: req.body.type,
            race: req.body.race,
            age: req.body.age,
            own: user.id,
        })

        user.pets = [ ...user.pets, pet._id ]
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