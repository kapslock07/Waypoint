import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    username: String,
    img: String,
    password: String
});


const GameSchema =  mongoose.Schema({
    title: String,
    description: String,
    image: String,
    users: [{
        username: String,
        img: String
    }]
});

const Game = mongoose.model("Games", GameSchema);

module.exports = Game;

