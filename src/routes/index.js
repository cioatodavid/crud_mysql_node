const express = require('express')
const machineRoutes = require('./machineRoutes')
const machinePartRoutes = require('./machinePartRoutes')
const replacementPartRoutes = require('./replacementPartRoutes')

const routes = (app) => {
    app.use(
        express.json(),
        machineRoutes,
        machinePartRoutes,
        replacementPartRoutes
    )
}

module.exports = routes
