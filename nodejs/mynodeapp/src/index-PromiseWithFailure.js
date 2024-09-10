

function blockMe(message) {
    console.log(message)
}
function getFailure() {
    return Promise.reject('failed') // new Promise() =>
}

function main() {
    blockMe('start')
    getFailure().catch(err => console.log(err))
 
    blockMe('end')
}
main()