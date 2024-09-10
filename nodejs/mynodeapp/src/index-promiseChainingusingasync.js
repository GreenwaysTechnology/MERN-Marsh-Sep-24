
const getUser = () => {
    console.log('getUser is called')
    let user = {
        name: 'admin',
        password: 'admin'
    }
    //user = null
    if (user) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, user)
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, 'User Not Found')
        })
    }

}
const login = user => {
    console.log('Login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, 'Login Success')
        } else {
            setTimeout(reject, 1000, 'Login Failed')
        }
    })
}

const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'Login Success') {
            setTimeout(resolve, 1000, 'Welcome to dashboard')
        } else {
            setTimeout(reject, 1000, 'Sorry you are not valid user')
        }
    })
}



async function main() {
    // getUser()
    //     .then(user => login(user))
    //     .then(status => showDashboard(status))
    //     .then(message => console.log(message))
    //     .catch(err => console.log(err))
    try {
        const user = await getUser()
        const status = await login(user)
        const message = await showDashboard(status)
        console.log(message, status, user)
    }
    catch (err) {
        console.log(err)
    }
}
main()