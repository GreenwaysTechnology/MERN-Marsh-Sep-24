const customerService = require('./services/customer.service')


function main() {
    console.log(customerService.findAll())
    console.log(customerService.save())
}
main()