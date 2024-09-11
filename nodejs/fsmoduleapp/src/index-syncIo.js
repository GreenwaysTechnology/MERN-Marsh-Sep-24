
const fs=require('node:fs')

async function main() {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    console.log('start')
    const data = fs.readFileSync(filePath, options)
    console.log(data)
    console.log('end')
}
main()