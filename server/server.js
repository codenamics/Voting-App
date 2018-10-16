require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 5000
const db = require('./models')

app.use(cors())
app.use(bodyParser.json())



app.get('/', (req, res) => res.send('hello world'))


app.listen(port, console.log(`Server is running on ${port}`))