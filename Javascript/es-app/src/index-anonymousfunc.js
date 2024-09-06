//function which receives another function as arg
function add(a, b) {
    return a + b
}
//passing values
//via variables
let x = 10
let y = 20
console.log(add(x, y))

//via values
console.log(add(10, 45))
//////////////////////////////////////////////////////////////////////////////////

function greet(myvar) {
    myvar()
}
let hello = function () {
    console.log('hello')
}
greet(hello)

//pass function directly
greet(function () {
    console.log('welcome')
})
//////////////////////////////////////////////////////////////////////////////////////


// function connect(cb) {
//     cb('connected')
// }
let connect = function (cb) {
    cb('connected')
}

connect(function (message) {
    console.log(message)
});
/////////////////////////////////////////////////////////////////////////////////////


let login = function (userName, password, success, failure) {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}

login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})
login('foo', 'bar', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})












