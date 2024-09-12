
const CUSTOMERS = [{
    id: 1,
    name: 'Subramanian',
    location: 'Coimbatore'
}]

class CustomerService {

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, CUSTOMERS)
        })
    }
    async findById(id) {
        return CUSTOMERS.find(customer => customer.id === id)
    }
    async save(customer) {
        return CUSTOMERS.concat(customer)
    }
}
module.exports = new CustomerService()