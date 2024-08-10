const db = require('../config/db');

class WorkoutService{

    static async getWorkout(name){
        try {
            const collection = db.collection(name);
            const workoutRaw = await collection.find();
            return await workoutRaw.toArray();
            
        } catch (error) {
            throw error;
        }
    }

}


module.exports = WorkoutService;