const express = require('express')
// const customerRouter = require('./routers/customer.router')


require('dotenv').config()
const app = express()

//Configure the router with application object
// app.use('/api/customers', customerRouter)
app.use('/api/customers', require('./routers/customer.router'))
app.use('/api/products', require('./routers/products.router'))

const PORT = process.env.PORT || 3000


const server = app.listen(PORT, () => {
    console.log(`Express server is running at ${server.address().port}`)
})