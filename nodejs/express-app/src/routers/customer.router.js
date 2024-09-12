const express = require('express')
const customerServicce = require('../services/customer.service')
//create Router Object
const customerRouter = express.Router()

customerRouter.use((req, res, next) => {
    console.log('customerRouter is called')
    next()
})

//apis - get,getById,save,delete,update
//api/customers/
customerRouter.get('/', async (req, res) => {
    try {
        const users = await customerServicce.findAll();
        res.json(users)
    }
    catch (err) {
        res.json({ err: err })
    }
})

customerRouter.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const customer = await customerServicce.findById(id);
        if (customer) {
            return res.json(customer)
        }
        return res.status(500).json({ err: `Requestd Customer ${id} Not Found` })

    }
    catch (err) {
        res.json({ err: err })
    }
})
customerRouter.post('/', async (req, res) => {
    try {

        const customer = req.body
        const customers = await customerServicce.save(customer)
        return res.status(201).json(customers)
    }
    catch (err) {
        res.json({ err: err })
    }
})


customerRouter.post('/', async (req, res) => {
    try {
        const user = await customerServicce.save();
        res.json(user)
    }
    catch (err) {
        res.json({ err: err })
    }
})


module.exports = customerRouter