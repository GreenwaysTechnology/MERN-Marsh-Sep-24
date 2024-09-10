const CUSTOMERS = require('../data/customers')

class CustomerService {
    constructor() {
        console.log('CustomerService service')
    }
    findAll() {
        return CUSTOMERS
    }
    save() {
        return 'save'
    }
    remove() {
        return 'delete'
    }
}
module.exports = new CustomerService()
