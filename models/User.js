import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    username: String,
    img: String,
    password: String
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;