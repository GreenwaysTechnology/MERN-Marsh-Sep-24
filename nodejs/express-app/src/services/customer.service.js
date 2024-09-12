
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
}
module.exports = new CustomerService()