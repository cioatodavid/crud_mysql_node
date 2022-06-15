const express = require('express')
const ReplacementPartController = require('../controllers/replacementPartController.js')
const router = express.Router();

router    
    .post('/replacement', ReplacementPartController.insertReplacementPart)
    .get('/replacement',ReplacementPartController.searchReplacementPart)
    .get('/replacement/:width', ReplacementPartController.searchReplacementPartByWidth)
    .get('/replacement/:height', ReplacementPartController.searchReplacementPartByHeight)
    .get('/replacement/:depth', ReplacementPartController.searchReplacementPartByDepth)
    .get('/replacement/:weight', ReplacementPartController.searchReplacementPartByWeight)
    .delete('/replacement/:macID/:repID', ReplacementPartController.deleteReplacementPart)

    
module.exports = router;