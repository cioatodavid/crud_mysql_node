const express = require('express')
const ReplacementPartController = require('../controllers/replacementPartController.js')
const router = express.Router();

router    
    .post('/replacement', ReplacementPartController.insertReplacementPart)
    .get('/replacement',ReplacementPartController.searchReplacementPart)
    .delete('/replacement/:macID/:repID', ReplacementPartController.deleteReplacementPart)

    
module.exports = router;