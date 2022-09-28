const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    city: String,
    pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pets' }]
}, { versionKey: false })

module.exports = mongoose.model('Users', userSchema)