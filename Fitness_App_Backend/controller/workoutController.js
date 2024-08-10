const workoutService = require('../service/workoutService');

exports.getAll = async(req,res)=>{
    try {
        const {type} = req.body;
        const result = await workoutService.getWorkout(type);
        if(result.length==0){
            res.json({status:false});
        }else{
            res.json({status:true,message:{beginner:result,intermidiate:result,advance:result,challenge:result}})
        }
        
        
    } catch (error) {
        res.json({status:false,message:error.message});
    }
}