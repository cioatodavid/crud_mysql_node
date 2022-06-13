const express = require('express')
const ReplacementPartController = require('../controllers/replacementPartController.js')
const router = express.Router();

router    
    .post('/replacement', ReplacementPartController.insertReplacementPart)
    .delete('/replacement/:macID/:repID', ReplacementPartController.deleteReplacementPart)

    
module.exports = router;