
const login = (userName, password) => {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success') //Promise.resolve
    } else {
        return Promise.reject('Login Failed')
    }
}

async function main() {
    try {
        const status = await login('admin', 'admin')
        console.log(status)
    }
    catch (err) {
        console.log(err)
    }
    
}
main()
