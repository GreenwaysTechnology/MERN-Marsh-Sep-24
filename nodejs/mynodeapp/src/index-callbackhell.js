//chaining
//resolve=success;reject=failure

const getUser = (resolve, reject) => {
    console.log('getUser is called')

    let user = {
        name: 'admin',
        password: 'admin'
    }
    //user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User Not Found')
    }

}
const login = (user, resolve, reject) => {
    console.log('Login is called')
    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, 'Login Success')
    } else {
        setTimeout(reject, 1000, 'Login Failed')
    }
}

const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'Login Success') {
        setTimeout(resolve, 1000, 'Welcome to dashboard')
    } else {
        setTimeout(reject, 1000, 'Sorry you are not valid user')
    }
}



function main() {
    getUser((user) => {
        //console.log(user)
        login(user, (status) => {
            //console.log(status)
            showDashboard(status, (message) => {
                console.log(message)
            }, (err) => {
                console.log(err)
            })
        }, (err) => {
            console.log(err)
        })

    }, (err) => {
        console.log(err)
    })
}
main()