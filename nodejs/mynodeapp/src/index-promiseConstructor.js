
function blockMe(message) {
    console.log(message)
}

const login = (userName, password) => {
    if (userName === 'admin' && password === 'admin') {
        //wrap timer with promise using constructors
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, 'Login success')
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, 'Login failed')
        })
    }
}

function main() {
    login('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))

    login('bar', 'foo')
        .then(status => console.log(status))
        .catch(err => console.log(err))
}
main()