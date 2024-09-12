const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use('/api/customers', require('./routers/customer.router'))

const myMiddleware = function (param) {
    //return function
    return function (req, res, next) {
        console.log('Got Param', param)
        next()
    }
}

app.use(myMiddleware('Marsh'))
//middleware 

app.use((req, res, next) => {
    //middleware logic
    console.log('global middleware middleware is called')
    //move to next middleware in the chain or to request handler
    next()
})

//req is object
//res is object
//next is function
app.get('/hello', (req, res, next) => {
    //middleware logic
    console.log('hello middleware is called')
    //move to next middleware in the chain or to request handler
    next()
})

app.use('/hai', (req, res, next) => {
    console.log(`Hai middleware, Method is ${req.method}`)
    next()
})
app.get('/hello', (req, res) => {
    return res.end('hello')
})
app.get('/hai', (req, res) => {
    return res.end('hai')
})
app.post('/hai', (req, res) => {
    return res.end('hai')
})
app.put('/hai', (req, res) => {
    return res.end('hai')
})
app.delete('/hai', (req, res) => {
    return res.end('hai')
})
app.get('/greeter', (req, res) => {
    return res.end('greeter')
})
const server = app.listen(PORT, () => {
    console.log(`Express server is running at ${server.address().port}`)
})