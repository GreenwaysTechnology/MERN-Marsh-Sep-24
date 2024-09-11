//simple web server
const http = require('node:http')
const userService = require('./services/user.service')

//create Http Server
const server = http.createServer((request, response) => {
    //read data from client.
    let data = ''
    request.on('data', (chunk) => {
        data += chunk
    })
    request.on('end', () => {
        userService.save(data)
        response.end('saved')
    })

})


//start the server
server.listen(3000, () => {
    console.log('server is ready')
})

//attach server listener
server.on('request', (request, response) => {
    console.log(`Request received on ${new Date()} URL ${request.url} method ${request.method}`)
})

