const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    surname: String,
    pets: [{
        pet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'pets'
        }
    }]
})

module.exports = mongoose.model('users', userSchema)