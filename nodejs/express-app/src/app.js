const express = require('express')
//middleware
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('node:fs')
const path = require('node:path')
const cors = require('cors')

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

require('dotenv').config()
const app = express()

const corsOptions = {
    origin: 'http://www.abce.com'
}
//Register Body Parser Middleware
app.use(bodyParser.json())
//Register Logger Middleware
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(morgan('combined', { stream: accessLogStream }))

//cors enabl
// app.use(cors())  //enable for all routes
app.use(cors(corsOptions))

app.use('/api/customers', require('./routers/customer.router'))
app.use('/api/products', require('./routers/products.router'))

const PORT = process.env.PORT || 3000

app.get('/api/customers/:id', (req, res, next) => {
    res.json({ msg: 'cors enabled for only this particular' })
})

app.get('/', (req, res) => {
    res.end('Home Page')
})

const server = app.listen(PORT, () => {
    console.log(`Express server is running at ${server.address().port}`)
})