const detailsService = require("../service/detailsService");

exports.updateDetails = async(req,res)=>{
    try {
        const {username,totalWorkout,totalMinutes,totalKcal} = req.body;
        await detailsService.updateDetail(username,totalWorkout,totalMinutes,totalKcal);
        res.json({status:true,message:"update sucessfully"});
    } catch (error) {
        res.json({status:false,message:error.message});
    }
}