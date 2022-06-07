const express = require('express')
const machineRoutes = require('./machineRoutes')
const machinePartRoutes = require('./machinePartRoutes')

const routes = (app) => {
    app.use(
        express.json(),
        machineRoutes,
        machinePartRoutes
    )
}

module.exports = routes
