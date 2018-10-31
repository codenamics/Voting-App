require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000


app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.get('/', (req, res) => res.send('hello world'))

app.use('/api/auth', routes.auth)
app.use('/api/poll', routes.poll)

app.listen(port, console.log(`Server is running on ${port}`))