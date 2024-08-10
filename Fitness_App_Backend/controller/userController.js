const userService = require("../service/userService");
const detailsService = require("../service/detailsService");

exports.signup = async(req,res)=>{
   try {
    const {email,password,username,BMI} = req.body;
    await userService.register(email,password,username,BMI);
    res.json({status:true,message:"signup sucessful"});
    
   } catch (error) {
    res.status(404).json({status:false,message:"email is already taken"});
   }
}

exports.login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        console.log(email,password);
        const result = await userService.checkUser(email);
        console.log(result);
        if(result==null){
            res.json({status:false,message:"UserID is not available"});
        }else{
            if(result.password===password) {
                console.log("done");
                const details = await detailsService.getDetail(result.username);
                console.log(details);
                res.json({status:true,message:"login sucessful",username:result.username,totalMinute:details.totalMinute,totalKcal:details.totalKcal,totalWorkout:details.totalWorkouts});
            } 
            else  res.json({status:false,message:"password not match"});
        }
    } catch (error) {
      res.json({status:false,message:"UserID is not available"});
    }
}

exports.checkUser = async(req,res)=>{
    try {
        const {username} = req.body;
        const result = await userService.checkUsername(username);
        console.log(result);
        if(result==null){ res.json({status:true});
        }
        else res.json({status:false});
        
    } catch (error) {
        res.json({status:false});
    }
}

exports.checkEmail = async(req,res)=>{
    try {
        const {email} = req.body;
        const result = await userService.checkEmailID(email);
        console.log(result);
        if(result==null){ res.json({status:true});
        }
        else res.json({status:false});
        
    } catch (error) {
        res.json({status:false});
    }
}