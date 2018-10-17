require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const port = 5000


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('hello world'))

app.use('/api/auth', routes.auth)

app.listen(port, console.log(`Server is running on ${port}`))