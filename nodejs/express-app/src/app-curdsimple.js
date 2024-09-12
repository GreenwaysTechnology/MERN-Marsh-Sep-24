const express = require('express')
const app = express()

const PORT = 3000

app.get('/api/customers', (req, res) => {
    res.end('customers -get')
})
app.post('/api/customers', (req, res) => {
    res.end('customers -post')
})
app.put('/api/customers', (req, res) => {
    res.end('customers -put')
})
app.delete('/api/customers', (req, res) => {
    res.end('customers -delete')
})
const server = app.listen(PORT, () => {
    console.log(`Express server is running at ${server.address().port}`)
})