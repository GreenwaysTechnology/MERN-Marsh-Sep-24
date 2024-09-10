const PRDOUCTS = require('../data/products')

class ProductService {
    constructor() {
        console.log('Product Service initalized')
    }
    //sync api
    getProducts() {
        return PRDOUCTS
    }
    //async api with callback
    listProducts(resolve, reject) {
        if (PRDOUCTS) {
            setTimeout(resolve, 5000, PRDOUCTS)
        } else {
            setTimeout(reject, 5000, { message: 'Products Not Found' })

        }
    }
    //async api with Promise
    findAll() {
        return new Promise((resolve, reject) => {
            if (PRDOUCTS) {
                setTimeout(resolve, 5000, PRDOUCTS)
            } else {
                setTimeout(reject, 5000, { message: 'Products Not Found' })
            }
        })
    }
}
module.exports = new ProductService()