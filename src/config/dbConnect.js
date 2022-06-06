const mysql = require('mysql2')

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
})

dbConnection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to database')
})

module.exports = dbConnection