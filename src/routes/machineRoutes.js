const express = require('express')
const MachineController = require('../controllers/machineController')
const router = express.Router();

router    
    .get('/machine', MachineController.getMachines)
    .get('/machine/:id', MachineController.getMachineById)
    .post('/machine', MachineController.insertMachine)
    .put('/machine/:id', MachineController.updateMachine)
    .delete('/machine/:id', MachineController.deleteMachine)
    .post('/machine/findby/', MachineController.searchMachine)


module.exports = router;