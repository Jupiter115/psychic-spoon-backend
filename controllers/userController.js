const express = require('express')
const router = express.Router()
const User = require('../models/User')

// routes
router.get('/', async (req, res, next) => {
    try{
        const users = await User.find({})
        res.json(users)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err){
        next(err)
    }
})

router.post('/', async (req, res, next) =>{
    try {
        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
    } catch (err) {
        next(err)
    } 
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.json(deletedUser)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            req.params.id, 
            req.body, 
            {
                new: true
            }
        )
        if(updatedUser){
            res.json(updatedUser)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

// export the routes
module.exports = router