import { Link } from "react-router-dom";
import '../css/home.css'
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
import axios from "axios";
import repoURL from "../repo/repoURL";
import { initHome } from "../redux/homeSlice";

function Home(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const challenges = useSelector((state)=> state.homeData.challenges);
    const beginners = useSelector((state)=> state.homeData.beginners);
    const intermidiates = useSelector((state)=> state.homeData.intermidiates);
    const advances = useSelector((state)=> state.homeData.advances);
  function handleChallenge(){
    console.log("hellsdfsadfsdfo");
  }
  async function getAllWorkout(){
    const result = await axios.post(repoURL.getAllWorkout,{type:"Beginners"});
    dispatch(initHome(result.data.message));
  }
  useEffect(()=>{
      getAllWorkout();
  },[]);
    function handleCard(val){
        var completeArray = [];
        for(let i=0;i<val.workout.length;i++){
            completeArray.push(false);
        }
        navigate('/exerciseCard',{state:{temp:val,complete:completeArray}});
    }


    function handleLogout(){
       sessionStorage.clear();
       navigate('/');
    }
    return(
    <>
            <nav className="homeNav">
                <h1 className="headNav">GymGenius</h1>
                <div className="navContent">
                  <Link to='/' className="content">Home</Link>
                  <Link to='/' className="content">Discover</Link>
                  <Link to='/report' className="content">Report</Link>
                </div>
                {sessionStorage.getItem("fitnessIslogin")==null?
                <div className="homeLoginDiv">
                    <Link to='login' className="homeLogin">Login</Link>
                    <Link to='signup' className="homeSignup">signup</Link> 
                </div>: <div  className="homeLoginUser">
                    <h1 style={{display:"inline-block"}}>Welcome Back, {sessionStorage.getItem('fitnessUsername')}</h1>
                    <button className="logoutBtn" onClick={handleLogout}>Logout</button>
                </div>}
            </nav>
            <div className="homeWorkout">
                <div>
                    <h1>{sessionStorage.getItem('totalWorkout')!=null?sessionStorage.getItem("totalWorkout"):0}</h1>
                    <h3>WORKOUTS</h3>
                </div>
                <div>
                    <h1>{sessionStorage.getItem('totalKcal')!=null?parseInt(sessionStorage.getItem("totalKcal")):0}</h1>
                    <h3>KCAL</h3>
                </div>
                <div>
                    <h1>{sessionStorage.getItem('totalMinutes')!=null?(parseFloat(parseInt(sessionStorage.getItem("totalMinutes"))/6000)).toFixed(2):0}</h1>
                    <h3>MINUTES</h3>
                </div>
            </div>
            <h2 className="challengeHead">7X4 CHALLENGES</h2>
            <div className="testmain" id='testmain'>
                
                {challenges.map((e,index)=>(
                <div className="test" key={index} style={{backgroundImage: "url(https://th.bing.com/th/id/OIP.GOiGH5VHzH1jOGcjQJFDQgHaEl?rs=1&pid=ImgDetMain)"}}>
                    <h1 className="headChallenge">Full body</h1>
                    <div className="challengeDesc">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <button className="challengeBtn" onClick={handleChallenge}>Start</button>
                </div>
               ))}
                </div>

                    <h2 className="challengeHead">BEGINNER</h2>
                    <div className="beginner">
                    {beginners.map((val,index)=>(
                        <a onClick={()=>{
                            handleCard(val);
                        }}  key={index} className="aTag">
                        <div style={{backgroundImage:`url(${val.img})`,backgroundPosition: 'center',backgroundSize: 'cover'}} className="card">
                                <h1 className="begineerHead">{val.type} BEGINNER</h1>
                                <h3>{val.workout.length/2} minute * {val.workout.length} Exercises</h3>
                        </div>
                        </a>
                    ))}
                    </div>
                    <h2 className="challengeHead">INTERMIDIATE</h2>
                    <div className="beginner">
                    {intermidiates.map((val,index)=>(
                       <a onClick={()=>{
                        handleCard(val);
                    }}  key={index} className="aTag">
                    <div style={{backgroundImage:`url(${val.img})`,backgroundPosition: 'center',backgroundSize: 'cover'}} className="card">
                            <h1 className="begineerHead">{val.type} INTERMIDIATE</h1>
                            <h3>{val.workout.length/2} minute * {val.workout.length} Exercises</h3>
                    </div>
                    </a>
                    ))}
                    </div>
                    <h2 className="challengeHead">ADVANCE</h2>
                    <div className="beginner">
                    {advances.map((val,index)=>(
                        <a onClick={()=>{
                            handleCard(val);
                        }}  key={index} className="aTag">
                        <div style={{backgroundImage:`url(${val.img})`,backgroundPosition: 'center',backgroundSize: 'cover'}} className="card">
                                <h1 className="begineerHead">{val.type} ADVANCE</h1>
                                <h3>{val.workout.length/2} minute * {val.workout.length} Exercises</h3>
                        </div>
                        </a>
                    ))}
                    </div>
    </>
    );
} 

export default Home;