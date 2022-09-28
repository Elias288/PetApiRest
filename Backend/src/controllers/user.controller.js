const mongoose = require('mongoose')
const userSchema = require('../schemas/user.schema')
const petSchema = require('../schemas/pet.schema')

exports.listarUsuario = (req, res) => {
    userSchema.find()
    .exec((err, users) => {
        if(err) throw err
        res.send({ users: users })
    })
}

exports.findUserbyId = (req, res) => {
    userSchema.findById(req.params.id)
    .populate('pets')
    .exec((err, user) => {
        if(err) throw err
        res.send(user)
    })
}

exports.createUser = (req, res) => {
    const user = new userSchema({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        city: req.body.city
    })
    user.save(err => {
        if (err) res.send('Error')
        res.send(user)
    })
}

exports.deleteUser = (req, res) => {
    userSchema.findByIdAndDelete(req.params.id, (err, user) => {
        if(err) throw err

        if(user){
            user.pets.forEach(pet => {
                petSchema.findByIdAndDelete(pet.id, (err) => {
                    if(err) throw err
                })
            })
        }
        res.send(user)
    })
}