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