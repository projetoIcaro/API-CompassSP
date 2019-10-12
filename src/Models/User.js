const mongoose = require('../DataBase');   

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    type: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;