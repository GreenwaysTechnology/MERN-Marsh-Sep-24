
const PRODUCTS = [{
    id: 1,
    name: 'phone'
}]

class ProductService {

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, PRODUCTS)
        })
    }
    async save() {
        return "save"
    }
}
module.exports = new ProductService()