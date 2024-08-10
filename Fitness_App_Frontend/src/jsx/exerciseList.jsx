import { useLocation,useNavigate, useSearchParams } from "react-router-dom";
import '../css/ExerciseList.css'
import axios from "axios";
import repoURL from "../repo/repoURL";

function ExerciseList(){
    const {state} = useLocation();
    const navigate = useNavigate();

    async function handleComplete(){
     console.log("hello");
     sessionStorage.setItem("totalWorkout",parseInt(sessionStorage.getItem("totalWorkout")==null?0:sessionStorage.getItem("totalWorkout"))+1);
     console.log(sessionStorage.getItem("totalMinutes"),sessionStorage.getItem("totalWorkout"),sessionStorage.getItem("totalKcal"));
     const username = sessionStorage.getItem("fitnessUsername");
     const totalKcal = sessionStorage.getItem("totalKcal");
     const totalMinutes = sessionStorage.getItem("totalMinutes");
     const totalWorkout = sessionStorage.getItem("totalWorkout");
     const response = await axios.post(repoURL.updateDetails,{username,totalKcal,totalMinutes,totalWorkout});
     console.log(response.data);
     if(response.data.status)
     navigate('/');

    }
    function handleCard(val,index){
        navigate("/exerciseDetails",{state:{val:state.temp,cur:val,index:index,complete:state.complete,startTime:(new Date).getTime()}});
    }
    return(
    <>
       
         <h1 className="cardHead">{state.type} BEGINNER</h1>
         <h1 className="space"></h1>
         <div className="exerciseList">
         {state.temp.workout.map((val,index)=>(
            <a onClick={()=>{
                handleCard(val,index);
            }} key={index} className="ExerciseCard">
                <div  className="divCard">
                    <img src="https://media.gq.com/photos/5b6372f2649a373331a3222e/master/w_1600%2Cc_limit/Dana-scruggs-fitness-GQ3150-W-GIF1.gif" alt="" width="100%" height={200} className="cardImg"/>
                    <div className="check">{state.complete[index]?"✅":" "}</div>
                    <div style={{width:"66%"}}>
                    <h1>{val.name}</h1>
                    <p>{val.reps}</p>
                    </div>
                </div>
            </a>
         ))}
      </div>
      <button className="cardFinish" onClick={handleComplete}>FINISH</button>
      
    </>
    );
}


export default ExerciseList;