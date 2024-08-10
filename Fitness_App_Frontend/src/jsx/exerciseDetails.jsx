import { useState } from 'react';
import '../css/exerciseDetails.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function ExerciseDetails(){
    const [isFlip,setFlip] = useState(false);
    const navigate = useNavigate();
    const {state}  = useLocation();
    function handleComplete(){
        console.log("hello");
        const millisecond = (new Date).getTime()-state.startTime;
        sessionStorage.setItem("totalMinutes",parseInt(sessionStorage.getItem("totalMinutes")==null?0:sessionStorage.getItem("totalMinutes"))+millisecond);
        const Kcal = parseInt(5*millisecond/6000);
        sessionStorage.setItem("totalKcal",parseInt(sessionStorage.getItem("totalKcal")==null?0:sessionStorage.getItem("totalKcal"))+Kcal);
        console.log(millisecond/1000);
        state.complete[state.index] = true;
        navigate('/exerciseCard',{state:{temp:state.val,complete:state.complete}});
    }
    return (
    <>
    <h1 className="cardHead">{state.cur.name} BEGINNER</h1>
    <h1 className="space"></h1>
        <div>
        <img src={isFlip?"https://media.gq.com/photos/5b6372f2649a373331a3222e/master/w_1600%2Cc_limit/Dana-scruggs-fitness-GQ3150-W-GIF1.gif":"https://www.workoutsprograms.com/media/cache/exercise_375/uploads/exercise/jumping-jack-en-plancha-muscle-5250.png"} alt="" width={400} height={400} className='detailsGif'/>
        <button className='detailsFlip' onClick={()=>{
            setFlip(isFlip?false:true);
        }}>FLIP IMG</button>
        </div>
        
        <div className='detailsCard'>
            <h1 style={{display:"inline-block",color:"blue"}}>DURATION</h1><h1 style={{display:"inline-block",paddingLeft:"50%"}}>20S</h1>
            <div style={{marginRight:500}}>
            <h1 style={{color:"blue"}}>INSTRUCTION</h1>
            {state.cur.instructions.map((val,index)=>(
               <p key={index} style={{fontSize:20}}>{val}</p> 
            ))}
            </div>
            <div>
                <h1 style={{color:"blue"}}>FOCUS AREA</h1>
                {state.cur.primaryMuscles.map((val,index)=>(
                 <div className='focusArea' key={index}>{val}</div>
            ))}
            {state.cur.secondaryMuscles.map((val,index)=>(
                 <div className='focusArea' key={index}>{val}</div>
            ))}
            </div>
        </div>
        <button className='completed' onClick={handleComplete}>COMPLTED</button>
        <button className='completed' onClick={()=>{
            console.log(state.cur);
            navigate('/exerciseCard',{state:{temp:state.val,complete:state.complete}});
        }}>GOBACK</button>
    </>
    );
}

export default ExerciseDetails;