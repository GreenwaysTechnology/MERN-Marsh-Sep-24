const fs = require('node:fs/promises');


async function readFile() {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    // fs.readFile(filePath, options, (err, data) => {
    //     if (err) throw err
    //     console.log(data)
    // })
    try {
        const data = await fs.readFile(filePath, options)
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }

}

function main() {
    readFile()
}
main()