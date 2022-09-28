const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
    name: String,
    type: String,
    race: String,
    age: Number,
    own: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
}, { versionKey: false })

module.exports = mongoose.model('Pets', petSchema)