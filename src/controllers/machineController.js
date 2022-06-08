const dbConnection = require('../config/dbConnect')


/* TODO:
    - Add a new machine :DONE
    - Get all machines :DONE
    - Get a machine by id :DONE
    - Update a machine :DONE    
    - Delete a machine :DONE
    - Search using query :DONE
    - Pagination :NEXT


*/



class MachineController {


    // get all itens from machine table
    static getMachines(req, res) {
        dbConnection.query('SELECT * FROM machine', (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'Error getting machines'
                })
                console.log(err)
            } else {
                res.json(rows)
            }
        })
    }

    //get all machines by page
    static getMachinesByPage(req, res) {
        const page = req.params.page
        const limit = 5
        const offset = (page - 1) * limit
        dbConnection.query('SELECT * FROM machine LIMIT ? OFFSET ?', [limit, offset], (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'Error getting machines'
                })
                console.log(err)
            } else {
                res.json({
                    nextPage: (Number(page) + 1),
                    prevPage: (page - 1) > 0 ? (Number(page) - 1) : 1,
                    currPage: rows
                })
            }
        })
    }

    // get a machine by id
    static getMachineById(req, res) {
        const id = req.params.id
        dbConnection.query('SELECT * FROM machine WHERE id = ?', id,
            (err, rows) => {
                if (err) {
                    res.status(500).json({
                        message: 'Error getting machine'
                    })
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
                res.status(500).json({
                    message: 'Error inserting machine'
                })
                return
            }
            res.json({
                message: 'Machine inserted successfully'
            })
        })
    }

    // update a machine by id
    static updateMachine(req, res) {
        const id = req.params.id
        dbConnection.query(`UPDATE machine SET ? WHERE id = ?`, [req.body, id], (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error updating machine'
                })
                return
            }
            res.json({
                message: 'Machine updated successfully',
                update: req.body
            })
        })
    }

    // delete a machine by id
    static deleteMachine(req, res) {
        const id = req.params.id
        dbConnection.query('DELETE FROM machine WHERE id = ?', id, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error deleting machine'
                })
                return
            }
            res.json({
                message: 'Machine deleted successfully'
            })
        })
    }

    //search using query
    //FIXME: need to add .00 to the end of the query number
    static searchMachine(req, res) {
        const query = req.query.search
        const value = req.query.value
        dbConnection.query(`SELECT * FROM machine WHERE ${query} LIKE ${value}`, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error searching machine'
                })
                return
            }
            res.json(rows)
        })
    }
}


module.exports = MachineController