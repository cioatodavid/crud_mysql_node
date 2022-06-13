const dbConnection = require('../config/dbConnect')

class MachinePartController {
    static getMachinePart (req, res) {
        dbConnection.query ('SELECT * FROM replacement_part', (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'Error getting machines part'
                })
                console.log (err)
            } else {
                res.json(rows)
            }
        })
    }

    static getMachinePartByPage (req, res){
        const page = req.params.page
        const limit = 5
        const offset = (page -1) * limit
        dbConnection.query('SELECT * FROM replacement_part LIMIT ? OFFSET ?', [limit, offset], (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'Error getting machines part'
                })
                console.log(err)     
            } else {
                res.json ({
                    nextPage: (number(page) +1),
                    prevPage: (page -1) > 0 ? (Number(page) -1) : 1,
                    currPage: rows
                })
            }
        })
    }

    static getMachinePartById(req, res) {
        const id = req.params.id
        dbConnection.query('SELECT * FROM replacement_part WHERE id = ?'), id,
        (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'Error getting machine part'
                })
                console.log(err)
            } else {
                res.json(rows)

            }
        }
    }

    static insertMachinePart (req, res) {
        dbConnection.query(`INSERT INTO replacement_part (SERIAL_NUMBER, WIDTH, HEIGHT, DEPTH, WEIGHT) values (
                ${req.body.SERIAL_NUMBER},
                ${req.body.WIDTH},
                ${req.body.HEIGHT},
                ${req.body.DEPTH},
                ${req.body.WEIGHT},
                )`, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json ({
                    message: 'Error inserting machine part'
                })
                return
            }    
            res.json({
                message: 'Machine part inserted sucessfully'
            })    
        })
        
    }

    static updateMachinePart(req, res){
        const id = req.params.id
        dbConnection.query('UPDATE machine SET ? WHERE id = ?', [req.body, id], (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error updating machine part'
                })
                return
            }
            res.json ({
                message: 'Machine part update sucessfully',
                update: req.body
            })
        })
    }

    static deleteMachinePart(req, res) {
        const id = req.params.id
        dbConnection.query('DELETE FROM replacement_part WHERE id = ?', id, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error deleting machine part'
                })
                return
            }
            res.json({
                message: 'Machine part deleted successfuly'
            })
        })
    }

    static searchMachinePartWithPage (req, res){
        const query = req.query.search
        const value = req.query.value
        const page = number(req.query.page)
        const limit = 5
        const offset = (page -1) * limit
        dbConnection.query('SELECT * FROM replacement_part WHERE ${query} LIKE ${value} LIMIT ? OFFSET ?', [limit, offset], (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error searching machine part'
                })
                return
            }
            res.json({
                nextPage: (Number(page) + 1),
                prevPage: (page - 1) > 0 ? (Number(page) - 1) : 1,
                currPage: rows
            })
        })

    }

}

module.exports = MachinePartController