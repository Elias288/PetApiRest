const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const userRoutes = require('./routes/user.routes')
const petRoutes = require('./routes/pet.routes')

var cors = require('cors')
const app = express()

app.use(cors({ origin: "http://localhost:4200" }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./services/bd.service')

app.get('/', (req, res) => {
    res.send({"hola": "mundo"})
})

app.use('/users', userRoutes)
app.use('/pets', petRoutes)

module.exports = app