//simple web server
const http = require('node:http')
const userService = require('./services/user.service')

//create Http Server
const server = http.createServer(async (request, response) => {

    try {
        const usersJson = await userService.findAll()
        //send status code and content type
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        response.write(usersJson)
        //close the stream
        response.end()
    }
    catch (err) {
        response.writeHead(500, {
            'Content-Type': 'application/json'
        })
        response.write({ err: err })
        response.end()
    }

})


//start the server
server.listen(3000, () => {
    console.log('server is ready')
})

//attach server listener
server.on('request', (request, response) => {
    console.log(`Request received on ${new Date()} URL ${request.url} method ${request.method}`)
})

