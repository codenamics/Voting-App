require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('hello world'))

app.use('/api/auth', routes.auth)
app.use('/api/poll', routes.poll)

app.listen(port, console.log(`Server is running on ${port}`))