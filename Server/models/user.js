const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    food: String,
    lyrics: String,
    song: String,
    img: String
})
const UserModel = mongoose.model("food", UserSchema)
module.exports = UserModel