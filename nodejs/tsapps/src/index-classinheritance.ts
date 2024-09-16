class Account {
    constructor() {

    }
    protected deposit() {
        return 0
    }

}
class SavingsAccount extends Account {
    constructor() {
        super()
    }
    public deposit(): number {
        return 100
    }
}

function main() {
    let sb = new SavingsAccount()
    console.log(sb.deposit())
}
main()