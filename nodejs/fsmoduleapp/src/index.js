const fs = require('node:fs');

//read

function readFile() {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    fs.readFile(filePath, options, (err, data) => {
        if (err) throw err
        console.log(data)
    })

}

function main() {
    console.log('start')
    readFile()
    console.log('end')
}
main()