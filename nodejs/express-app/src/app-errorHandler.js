const express = require('express')
const app = express();

app.use((err, req, res, next) => {
    //  next()
    res.status(500);
    res.send('Internal Server Error');
})

//api test error 
app.get('/api/greet/:message', (req, res) => {
    const message = req.params.message
    if (message === 'hello') {
        res.send(message)
    } else {
        throw new Error('Broken...')
    }
})

app.listen(3000, () => {
    console.log('Express server is running')
})