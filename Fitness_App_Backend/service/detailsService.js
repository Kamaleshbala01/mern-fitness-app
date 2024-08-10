const db = require('../config/db');

class DetailsService{
    static async updateDetail(username,totalWorkouts,totalMinute,totalKcal){
        try {
            const collection  = db.collection('userdetails');
            return await collection.updateOne({username},{$set:{totalWorkouts,totalKcal,totalMinute}});
        } catch (error) {
            throw error;
        }
    }

    static async getDetail(username){
        try {
            const collection  = db.collection('userdetails');
            return await collection.findOne({username});
        } catch (error) {
            throw error
        }
    }
}

module.exports = DetailsService;