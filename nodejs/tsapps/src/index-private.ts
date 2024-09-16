
class User {
    private userName:string ='admin'
    private password:string = 'admin'

    private auth(){
        return 'something'
    }
}

function main(){
    let user = new User()
    console.log(user.userName ,user.auth())
}
main()