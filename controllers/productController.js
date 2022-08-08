const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// routes
router.get('/', async (req, res, next) => {
    try{
        const products = await Product.find({})
        res.json(products)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (err){
        next(err)
    }
})

router.post('/', async (req, res, next) =>{
    try {
        console.log(req.body)
        const newProduct = await Product.create(req.body)
        console.log(newProduct)
        res.status(200).json(newProduct)
    } catch (err) {
        next(err)
    } 
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedproduct = await Product.findByIdAndDelete(req.params.id)
        res.json(deletedproduct)
    } catch (err) {
        next(err)
    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            req.params.id, 
            req.body, 
            {
                new: true
            }
        )
        if(updatedProduct){
            res.json(updatedProduct)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

// export the routes
module.exports = router