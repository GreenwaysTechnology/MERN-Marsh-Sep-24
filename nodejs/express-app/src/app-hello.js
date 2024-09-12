//import express function
const express = require('express')
// console.log(express)

//creating application object
const app = express()

// console.log(app)

//api:
app.get('/hello', (req, res) => {
    //send response
    res.end('Hello Express')
})


//start the server

app.listen(3000, () => {
    console.log('Express Server is Ready!')
})