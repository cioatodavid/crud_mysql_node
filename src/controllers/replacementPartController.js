const dbConnection = require('../config/dbConnect')

class ReplacementPartController {

    static insertReplacementPart(req, res) {
        dbConnection.query(`INSERT INTO replacement_part_for_machine (MACHINE_ID,REPLACEMENT_PART_ID) values (
                "${req.body.MACHINE_ID}",
                ${req.body.REPLACEMENT_PART_ID}    
                )`, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error inserting replacement part connection'
                })
                return
            }
            res.json({
                message: 'Replacement part connection inserted successfully'
            })
        })
    }

    static searchReplacementPart(req, res) {
        dbConnection.query(`SEARCH INTO replacement_part_for_machine (MACHINE_SERIAL_NUMBER, REPLACEMENT_PART_SERIAL_NUMBER)values (
                ${req.body.MACHINE_SERIAL_NUMBER},
                ${req.body.REPLACEMENT_PART_SERIAL_NUMBER}
                )`, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error searching replacement part connection'
                })
                return
            }
            res.json ({
                message: 'Replacement part connection search sucessfully'
            })
        })
    }

    static searchReplacementPartByWidth(req, res) {
        dbConnection.query(`SEARCH INTO replacement_part_for_machine (MACHINE_WIDTH, REPLACEMENT_PART_WIDHT) values (
                ${req.body.MACHINE_WIDHT},
                ${req.body.REPLACEMENT_PART_WIDHT}
                )`, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error searching replacement part connection'
                })
                return
            }
            res.json ({
                message: 'Replacement part connection search sucessfully'
            })
        })
    }

    static searchReplacementPartByHeight(req, res) {
        dbConnection.query(`SEARCH INTO replacement_part_for_machine (MACHINE_HEIGHT, REPLACEMENT_PART_HEIGHT) values (
                ${req.body.MACHINE_HEIGHT},
                ${req.body.REPLACEMENT_PART_HEIGHT}
                )`, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error searching replacement part connection'
                })
                return
            }
            res.json ({
                message: 'Replacement part connection search sucessfully'
            })
        })
    }

    static searchReplacementPartByDepth(req, res) {
        dbConnection.query(`SEARCH INTO replacement_part_for_machine (MACHINE_DEPTH, REPLACEMENT_PART_DEPTH) values (
                ${req.body.MACHINE_DEPTH},
                ${req.body.REPLACEMENT_PART_DEPTH}
                )`, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error searching replacement part connection'
                })
                return
            }
            res.json ({
                message: 'Replacement part connection search sucessfully'
            })
        })
    }

    
    static searchReplacementPartByWeight(req, res) {
        dbConnection.query(`SEARCH INTO replacement_part_for_machine (MACHINE_WEIGTH, REPLACEMENT_PART_WEIGHT) values (
                ${req.body.MACHINE_WEIGHT},
                ${req.body.REPLACEMENT_PART_WEIGHT}
                )`, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error searching replacement part connection'
                })
                return
            }
            res.json ({
                message: 'Replacement part connection search sucessfully'
            })
        })
    }


    static deleteReplacementPart(req, res) {
        dbConnection.query(`DELETE FROM replacement_part_for_machine WHERE MACHINE_ID = "${req.params.macID}" and REPLACEMENT_PART_ID = ${req.params.repID} `, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error deleting replacement part connection'
                })
                return
            }
            res.json({
                message: 'Replacement part connection deleted successfully'
            })
        })
    }

}



module.exports = ReplacementPartController