const express = require('express')
const app = express()
const handler = require('../server/handlers/index')

const port = 5000

app.get('/', (req, res) => res.send('hello world'))

app.use(handler.notFound)

app.use(handler.errorHandler)

app.listen(port, console.log(`Server is running on ${port}`))