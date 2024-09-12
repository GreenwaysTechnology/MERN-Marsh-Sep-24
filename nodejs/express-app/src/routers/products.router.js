const express = require('express')
const productService = require('../services/product.service')
//create Router Object
const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
    try {
        const products = await productService.findAll();
        res.json(products)
    }
    catch (err) {
        res.json({ err: err })
    }
})

productRouter.post('/', async (req, res) => {
    try {
        const product = await productService.save();
        res.json({ product })
    }
    catch (err) {
        res.json({ err: err })
    }
})


module.exports = productRouter