const db = require("../config/db");
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const detailsSchema = new schema({
    username:{
        type:String
    },
    BMI:{
        type:Number
    },
    totalWorkouts:{
        type:String
    },
    totalKcal:{
        type:String
    },
    totalMinute:{
        type:String
    },
});

module.exports = db.model("userDetails",detailsSchema);