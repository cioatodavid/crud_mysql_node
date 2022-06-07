const dbConnection = require('../config/dbConnect')


/* TODO:
    - Add a new machine :DONE
    - Get all machines :DONE
    - Get a machine by id :NEXT
    - Update a machine
    - Delete a machine


*/


class MachineController {
    
    // get all itens from machine table
    static getMachines(req, res) {
        dbConnection.query('SELECT * FROM machine', (err, rows) => {
            if (err) {
                console.log(err)
            } else {
                res.json(rows)
            }
        })
    }

    // get a machine by id
    static getMachineById(req, res) {
        dbConnection.query('SELECT * FROM machine WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) {
                console.log(err)
            } else {
                res.json(rows)
                
            }
        })
    }

    // insert new machine
    static insertMachine(req, res) {
        dbConnection.query(`INSERT INTO machine (SERIAL_NUMBER,WIDTH,HEIGHT,DEPTH,WEIGHT) values (
                ${req.body.SERIAL_NUMBER},
                ${req.body.WIDTH},
                ${req.body.HEIGHT},
                ${req.body.DEPTH},
                ${req.body.WEIGHT}
                )`, (err, rows) => {
            if (err) {
                console.log(err)
                return
            }
            res.json({
                message: 'Item inserted successfully'
            })
        })
    }



}

module.exports = MachineController