const express = require('express')
const app = express()
const dotevn = require('dotenv').config()
const bodyParser = require('body-parser')
const dbConnection = require('./config/dbConnect.js')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// get all itens from machine table
app.get('/machine', (req, res) => {
    dbConnection.query('SELECT * FROM machine', (err, rows) => {
        if (err) {
            console.log(err)
            return
        }
        res.json(rows)
    })
})

app.post('/machine', (req, res) => {
    dbConnection.query(`INSERT INTO machine (SERIAL_NUMBER,WIDTH,HEIGHT,DEPTH,WEIGHT) values (
        ${req.body.SERIAL_NUMBER},
        ${req.body.WIDTH},
        ${req.body.HEIGHT},
        ${req.body.DEPTH},
        ${req.body.WEIGHT}
        )`, (err, rows) => {
        if (err) {
            console.log(err)
            return
        }
        res.json(rows)
    })
})



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server running on: http://localhost:${port}`))