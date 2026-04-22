const mongoose = require("mongoose");

const DB_Connection = mongoose.connect("mongodb://localhost:27017/mca");

module.exports = DB_Connection;