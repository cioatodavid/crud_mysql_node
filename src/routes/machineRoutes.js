const express = require('express')
const MachineController = require('../controllers/machineController')
const router = express.Router();

router
    //aqui as rotas
    .get('/machine', MachineController.getMachines)
    .post('/machine', MachineController.insertMachine)

module.exports = router;