const mongoose = require('../db/connection')

const Schema = mongoose.Schema


const ProductSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        orig: {
            type: Number,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        likes: Number,
        category: Array,
        hero: Boolean
    }
)

const Product = mongoose.model("product", ProductSchema)

module.exports = Product