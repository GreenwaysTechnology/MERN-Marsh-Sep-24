
//login

const login = (userName, password) => {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login Success')
    } else {
        return Promise.reject('Login failed')
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