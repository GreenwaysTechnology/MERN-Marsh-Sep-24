

let connect = function (cb) {
    cb('connected')
}
connect(function (status) {
    console.log(status)
})
//arrow

connect = cb => cb('connected')

// connect((status) => {
//     console.log(status)
// })
connect(status => console.log(status))


let login = (userName, password, success, failure) => {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}

login('admin', 'admin', (status) => {
    console.log(status)
}, (err) => {
    console.log(err)
})

login('admin', 'admin', status => console.log(status), err => console.log(err))