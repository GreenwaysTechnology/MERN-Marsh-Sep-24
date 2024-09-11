const USERS = require('../data/users')

class UserService {

    findAll() {
        return new Promise((resolve, reject) => {
            //send users after 1000 ms
            const usersJson = JSON.stringify(USERS)
            setTimeout(resolve, 5000, usersJson)
        })
    }
    save(user) {
        // Todo: later you can insert this into db
        console.log(user)
    }

}
module.exports = new UserService()