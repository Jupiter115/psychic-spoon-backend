const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const ProductSchema = new Schema(
    {
        title: String,
        orig: Number,
        price: Number,
        description: String,
        image: String,
        likes: Number,
        category: Array,
        Hero: Boolean
    }
)

const Product = mongoose.model("product", ProductSchema)

module.exports = Product