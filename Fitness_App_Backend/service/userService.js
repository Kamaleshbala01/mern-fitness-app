const db = require('../config/db');
const userModel = require('../model/userModel');
const userDetails = require("../model/detailsModel");

class userService{
    static async register(email,password,username,BMI){
        try {
            const  totalMinute = '0', totalKcal = "0", totalWorkouts = "0";
            const newUser = new userModel({email,password,username});
            const newuserDetails = new userDetails({username,BMI,totalKcal,totalWorkouts,totalMinute});
            await newuserDetails.save();
            return await newUser.save();
        } catch (error) {
            throw error;
        }
    }

    static async checkUser(email){
        try {
            const collection = db.collection('users');
            return await collection.findOne({email});
        } catch (error) {
            throw error;
        }
    }
    static async checkUsername(username){
        try {
            const collection = db.collection('users');
            return await collection.findOne({username});
        } catch (error) {
            throw error;
        }

    }

    static async checkEmailID(email){
        try {
            const collection = db.collection('users');
            return await collection.findOne({email});
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userService;