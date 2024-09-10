const productService = require('./services/product.service')

// function main() {
//     //call sync service
//     console.log('start')
//     const products = productService.getProducts()
//     console.log(products)
//     console.log('end')
// }
// main()

// function main() {
//     //call async service
//     console.log('start')
//     productService.listProducts(products => {
//         console.log(products)
//     }, err => {
//         console.log(err)
//     })
//     console.log('end')
// }
// main()
// function main() {
//     //call async service
//     console.log('start')
//     productService.findAll()
//         .then(products => {
//             console.log(products)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     console.log('end')
// }
// main()

async function main() {

    try {
        const products = await productService.findAll()
        console.log(products)
    }
    catch (err) {
        console.log(err)
    }


}
main()