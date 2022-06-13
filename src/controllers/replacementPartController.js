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