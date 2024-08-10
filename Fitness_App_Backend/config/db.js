const mongoose = require("mongoose");

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/fitness").on("open",()=>{
    console.log("connected...!");
}).on('error',()=>{
    console.log("failed");
});

module.exports = connection;