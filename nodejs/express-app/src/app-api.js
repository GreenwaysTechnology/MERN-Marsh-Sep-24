const express = require('express')
const app = express()

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
app.listen(3000, () => {
    console.log('Express Server is Ready!')
})