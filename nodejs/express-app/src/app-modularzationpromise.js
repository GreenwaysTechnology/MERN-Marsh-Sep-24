const express = require('express')
const app = express()
const customerServicce = require('./services/customer.service')

const PORT = 3000

app.get('/api/customers', async (req, res) => {
    try {
        const customers = await customerServicce.findAll()
        res.status(200).json(customers)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
const server = app.listen(PORT, () => {
    console.log(`Express server is running at ${server.address().port}`)
})