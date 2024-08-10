const db = require("../config/db");
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    username:{
        type:String
    },
    email:{
        type:String,
         lowercase:true,
         unique:true,
         required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = db.model("users",userSchema);