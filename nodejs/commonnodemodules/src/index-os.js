const os = require('node:os')

function main(){
    console.log(os.arch())
    console.log(os.cpus())
}
main()