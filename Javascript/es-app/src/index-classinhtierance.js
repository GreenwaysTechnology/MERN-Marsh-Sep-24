
class Account {
    constructor() {
        console.log('Account constructor is called')
    }
    deposit() {
        return 10
    }

}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('Savings Account constructor is called')
    }
    deposit(){
        return 100 + super.deposit()
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())