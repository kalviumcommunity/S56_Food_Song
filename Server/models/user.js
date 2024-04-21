const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    food: String,
    song: String,
    img: String,
    creator: String
})

const UserDetails = new mongoose.Schema({
    username: String
})


const UserModel = mongoose.model("food", UserSchema)
const UserDetail = mongoose.model("username", UserDetails)
module.exports = {UserModel,UserDetail}