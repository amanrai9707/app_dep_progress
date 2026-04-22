const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    email: {
        type: String,
        lowercase: true
    },
    password: String
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;