const mongoose = require('mongoose')
const userSchema = require('../schemas/user.schema')

exports.listarUsuario = (req, res) => {
    userSchema.find(
        (err, data) => {
            if(err) throw err
            res.send({ users: data })
        }
    )
}

exports.createUser = (req, res) => {
    const user = new userSchema({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
    })
    user.save(err => {
        if (err) res.send('Error')
        res.send(user)
    })
}