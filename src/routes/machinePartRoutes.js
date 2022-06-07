const express = require('express')
const MachinePartController = require('../controllers/machinePartController')
const router = express.Router();

router
    .get('/machinePart', MachinePartController.getMachinePart)
    .post('/machinePart', MachinePartController.insertMachinePart)


module.exports = router;