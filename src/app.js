const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const userRoutes = require('./routes/user.routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./services/bd.service')

app.get('/', (req, res) => {
    res.send({"hola": "mundo"})
})

app.use('/users', userRoutes)

module.exports = app