const employee = require('../db/queries.js')

const getAllEmployees = (req, res) => {
    employee.getAll((err, data) => {
        if (err) throw err
        res.status(200).send(data)
    })
    
}