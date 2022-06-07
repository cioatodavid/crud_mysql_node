const dbConnection = require('../config/dbConnect')

class MachinePartController {
    static getPartMachines (req, res) {
        dbConnection.query ('SELECT * FROM Machine Part', (err, rows) => {
            if (err) {
                console.log (err)
            } else {
                res.json(rows)
            }
        })
    }

    static insertMachinePart (req, res) {
        dbConnection.query(`INSERT INTO machinePart (SERIAL_NUMBER, WIDTH, HEIGHT, DEPTH, WEIGHT) values (
                ${req.body.SERIAL_NUMBER},
                ${req.body.WIDTH},
                ${req.body.HEIGHT},
                ${req.body.DEPTH},
                ${req.body.WEIGHT},
                )`, (err, rows) => {
            if (err) {
                console.log(err)
                return
            }    
            res.json({
                message: 'Iten inserted sucessfully'
            })    
        })
        
    }
}

module.exports = MachinePartController