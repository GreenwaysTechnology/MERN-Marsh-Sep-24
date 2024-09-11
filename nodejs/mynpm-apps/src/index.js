const http = require('node:http')

//create Http Server
const server = http.createServer((request, response) => {
    //write code to handle request and response
    response.write('Welcome to node')
    //close the stream
    response.end()
})


//start the server
server.listen(3000, () => {
    console.log('server is ready')
})