

function blockMe(message) {
    console.log(message)
}
function getSuccess() {
    return Promise.resolve('success')
}

function main() {
    blockMe('start')
    getSuccess().then(data => console.log(data))
    blockMe('end')
}
main()