const express = require('express')
const MachinePartController = require('../controllers/machinePartController')
const router = express.Router();

router
    .get('/machinePart', MachinePartController.getMachinePart)
    .get('/machinePart/:id ', MachinePartController.getMachinePartById)
    .get('/machinePart/page/:page', MachinePartController.getMachinePartByPage)
    .post('/machinePart', MachinePartController.insertMachinePart)
    .post('/machinaPart/findby/page/', MachinePartController.searchMachinePartWithPage)
    .put('/machinePart/:id', MachinePartController.updateMachinePart)
    .delete('/machinePart/:id', MachinePartController.deleteMachinePart)


module.exports = router;