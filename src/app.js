const express = require('express')
const app = express()
const dotevn = require('dotenv').config()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000
const cors = require('cors')
const routes = require('./routes/index')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

routes(app)

app.listen(port, () => console.log(`Server running on: http://localhost:${port}`))