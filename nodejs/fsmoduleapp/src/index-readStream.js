const fs = require('node:fs');

//read

function readFile() {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    const inputStream = fs.createReadStream(filePath, options)

    //read data
    //attach events
    let data = ''
    inputStream.on('data', (chunk) => {
        data += chunk
    })
    inputStream.on('end', () => {
        console.log(data)
    })
    inputStream.on('close', () => {
        console.log('close event is called')
    })
    inputStream.on('error', (err) => {
        console.log('error event is called')
    })
}

function main() {
    readFile()
}
main()