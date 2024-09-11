//simple web server
const http = require('node:http')

//create Http Server
const server = http.createServer((request, response) => {
    //write code to handle request and response
    response.write('Hello')
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

