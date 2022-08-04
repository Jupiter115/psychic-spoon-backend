const mongoose = require('../connection')
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

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product