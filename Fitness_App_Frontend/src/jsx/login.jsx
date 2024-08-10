import { useEffect, useState } from "react";
import '../css/login.css'
import { Link, useNavigate } from "react-router-dom";
import value from '../repo/repoURL.js'
import axios from "axios";
function Login(){
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    function handleLogin(){
        if(sessionStorage.getItem("fitnessIslogin")!=null) navigate("/");
    }
    useEffect(()=>{
        handleLogin();
    },[]);

    async function handleSubmit(event){
        event.preventDefault();
        const result = await axios.post(value.login,{email,password});
        if(result.data.status){
            alert(result.data.message);
            sessionStorage.setItem("fitnessIslogin",true);
            sessionStorage.setItem("fitnessUsername",result.data.username);
            console.log(sessionStorage.getItem("fitnessIslogin"));
            sessionStorage.setItem("totalMinutes",(sessionStorage.getItem("totalMinutes")==null?result.data.totalMinute:parseInt(sessionStorage.getItem("totalMinutes"))+parseInt(result.data.totalMinute)));
            sessionStorage.setItem("totalWorkout",(sessionStorage.getItem("totalWorkout")==null?result.data.totalWorkout:parseInt(sessionStorage.getItem("totalWorkout"))+parseInt(result.data.totalWorkout)));
            sessionStorage.setItem("totalKcal",(sessionStorage.getItem("totalKcal")==null?result.data.totalKcal:parseInt(sessionStorage.getItem("totalKcal"))+parseInt(result.data.totalKcal)));
            navigate('/');
        }

    }
    return(
    <>
        <div className="loginContainer">
        <div className="loginDiv">
        <h1>Login Page</h1>
             <form onSubmit={handleSubmit} className="loginForm">
             <div style={{textAlign:"start",paddingLeft:20}}>
             <p style={{fontSize:20}}>Enter MailID</p>
                </div>
                <input className="loginInput" type="email" required placeholder="Your mail ID"id="email" onChange={(event)=>{
                    setEmail(event.target.value.toLocaleLowerCase());
                }}/>
                <div style={{textAlign:"start",paddingLeft:20}}>
             <p style={{fontSize:20}}>Enter Password</p>
                </div>
                <input type="password" className="loginInput" required placeholder="Your Password" id="password" onChange={(event)=>{
                    setPassword(event.target.value);
                }} /><br />
                <button type='submit' className="loginButton">Login</button>
                <h2>Don't have account?</h2> <Link to="/signup" className="loginLink">signup</Link>
            </form>

        </div>
        </div>
    </>
    );
}

export default Login;