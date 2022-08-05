const mongoose = require('../db/connection')

// create the User schema
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

//instantiate the model and give an name 
const User = mongoose.model('user', UserSchema)

// export the model
module.exports = User