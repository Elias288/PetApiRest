const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
    name: String,
    type: String,
    race: String,
    age: String,
    own: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = mongoose.model('pets', petSchema)