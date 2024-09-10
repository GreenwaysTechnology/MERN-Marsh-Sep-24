
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



function main() {
    // getUser((user) => {
    //     //console.log(user)
    //     login(user, (status) => {
    //         //console.log(status)
    //         showDashboard(status, (message) => {
    //             console.log(message)
    //         }, (err) => {
    //             console.log(err)
    //         })
    //     }, (err) => {
    //         console.log(err)
    //     })

    // }, (err) => {
    //     console.log(err)
    // })

    // getUser()
    //     .then(user => {
    //         //call login 
    //         return login(user)
    //     })
    //     .then(status => {
    //         //call show dashboard
    //         return showDashboard(status)
    //     })
    //     .then(message => {
    //         console.log(message)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    getUser()
        .then(user => login(user))
        .then(status => showDashboard(status))
        .then(message => console.log(message))
        .catch(err => console.log(err))
}
main()