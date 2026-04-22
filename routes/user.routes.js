const express = require("express");

const UserModel = require("../models/user.model");

const userRoutes = express.Router();

userRoutes.post("/register", async (req, res) => {
    try {
        let newData = new UserModel(req.body);
        await newData.save();

        res.send({ message: "Registration Complete" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = userRoutes;