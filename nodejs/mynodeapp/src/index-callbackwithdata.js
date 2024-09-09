function blockMe(message) {
    console.log(message)
}
function delay(listener) {
    //non blocking api which is called after some time which never blocks next line of code
    setTimeout(listener, 5000,"Hello,I am delayed")
}

function main() {
    blockMe('start')
    delay(function (message) {
        console.log(message)
    })
    blockMe('end')
}
main()