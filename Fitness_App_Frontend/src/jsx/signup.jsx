import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import repoURL from '../repo/repoURL';

function Signup(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState();
    const [username,setUsername] = useState('');
    const [userAvailable,setUserAvailable] = useState();
    const [emailAvailable,setEmailAvailable] = useState();
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0)

    const navigate = useNavigate();

    async function handleUsername(username){
     const result = await axios.post(repoURL.checkUser,{username});
     setUserAvailable(result.data.status);  
    }
    async function handleEmailID(email){
        const result = await axios.post(repoURL.checkEmail,{email});
        setEmailAvailable(result.data.status);
       }
    async function handleSubmit(event){
        event.preventDefault();
        if(emailAvailable && userAvailable){
            const BMI = weight/(height*height);
            const result = await axios.post(repoURL.signup,{email,password,username,BMI});
            if(result.data.status){
                alert(result.data.message);
                navigate('/login');
            }
        }else{
            alert("Enter valid information....!");
            if(!emailAvailable)setEmail('');
            if(!userAvailable)setUsername('');
        }
        
    }

    return(
        <>
      
        <div className="loginContainer">
        <div className="loginDiv">
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit} class="loginForm">
            <div style={{textAlign:"start",paddingLeft:20}}>
            {username==''?<p style={{fontSize:20}}>Enter user name</p>:(userAvailable?<p style={{color:'green',fontSize:20}}>Username is available</p>:<p style={{color:"red",fontSize:20}}>Username is Already taken</p>)}
            </div>
            <input className="loginInput" type="text" placeholder="User Name" value={username} onChange={(event)=>{
                   setUsername(event.target.value);
                   handleUsername(event.target.value);
            }}/>


             <div style={{textAlign:"start",paddingLeft:20}}>
            {email==''?<p style={{fontSize:20}}>Enter Email ID</p>:(emailAvailable?<p style={{color:'green',fontSize:20}}>EmailID is Available</p>:<p style={{color:"red",fontSize:20}}>EmailID is Already taken</p>)}
            </div>
                <input className="loginInput" type="email" value={email} required placeholder="Your mail ID" onChange={(event)=>{
                    setEmail(event.target.value);
                    handleEmailID(event.target.value);
                }}/>


                <div style={{textAlign:"start",paddingLeft:20}}>
                <p style={{fontSize:20}}>Enter Your Password</p>
            </div>
                <input className="loginInput" type="password" value={password} required placeholder="Your Password"  onChange={(event)=>{
                    setPassword(event.target.value);
                }} /><br />
                <div style={{textAlign:"start"}}><p style={{fontSize:20,margin:25}}>Enter Your Details</p>
                </div>
             <div className='loginDetailsDiv'>
                <input type="number" required className='loginDetails' placeholder="height in CM" onChange={(event)=>{
                    setHeight(parseFloat(event.target.value/100));
                }}/>
                <input type="number" required className='loginDetails' placeholder='Weight in KG' onChange={(event)=>{
                    setWeight(parseInt(event.target.value));
                }}/>
             </div>


                <button type='submit' className="loginButton">Signup</button>
                <h2>Already have account?</h2> <Link to="/login" class="loginLink">Login</Link>
            </form>
            <br />
            
            </div>
        </div>
        </>
    );
}

export default Signup;