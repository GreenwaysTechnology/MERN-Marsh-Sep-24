//simple web server
const http = require('node:http')
const USERS = require('./data/users')

//create Http Server
const server = http.createServer((request, response) => {
    //send as json
    const usersJson = JSON.stringify(USERS)

    //send status code and content type
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })

    response.write(usersJson)
    //close the stream
    response.end()
})


//start the server
server.listen(3000, () => {
    console.log('server is ready')
})

//attach server listener
server.on('request', (request, response) => {
    console.log(`Request received on ${new Date()} URL ${request.url} method ${request.method}`)
})

