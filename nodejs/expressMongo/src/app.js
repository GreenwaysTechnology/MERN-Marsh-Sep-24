const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(bodyParser.json())

const PORT = 3000

//connect to mongodb
async function connectDb() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/myDb')
        console.log("Mongo is connected")

        // const server = app.listen(PORT, () => {
        //     console.log(server.address())
        //     console.log(`Express is running @ ${server.address().port}`)
        // })

    }
    catch (e) {
        console.log(e)
    }
}
connectDb()

app.use('/api/posts', require('./routers/post.router'))


const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})
