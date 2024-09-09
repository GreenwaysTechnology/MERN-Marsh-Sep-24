function blockMe(message) {
    console.log(message)
}
function delay(listener) {
    //non blocking api which is called after some time which never blocks next line of code
    setTimeout(listener, 5000)
}

function main() {
    blockMe('start')
    delay(function () {
        console.log('hello,i am delayed')
    })
    blockMe('end')
}
main()