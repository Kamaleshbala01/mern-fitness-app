import '../css/report.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

function Report(){

    const bool = [true,false,true,false,true,true,true];

    function handleFroward(){
        console.log("forward");
    }
    function handleBackward(){
        console.log("backward");
    }
    return(
    <>
    <div className='ReportRoot'>
        <h1 style={{textAlign:'start',padding:"0 0 0 10px"}}>REPORT</h1>
        <div className='ReportWorkout'>
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
        <h1 style={{textAlign:'start',padding:"0 0 0 10px",display:"inline-block"}}>HISTORY</h1>
        <button className='reportBtn'>Show All</button>
        <div className='ReportWorkout'>
            <IoArrowBackCircleOutline size={40} className='reportNav' onClick={handleBackward}/>
            <div><h3>SUN</h3><div className={`reportDate${(bool[0]?"YES":"NO")}`}><h3>1</h3></div></div>
            <div><h3>MON</h3><div className={`reportDate${(bool[1]?"YES":"NO")}`}><h3>1</h3></div></div>
            <div><h3>TUE</h3><div className={`reportDate${(bool[2]?"YES":"NO")}`}><h3>1</h3></div></div>
            <div><h3>WED</h3><div className={`reportDate${(bool[3]?"YES":"NO")}`}><h3>1</h3></div></div>
            <div><h3>THUR</h3><div className={`reportDate${(bool[4]?"YES":"NO")}`}><h3>1</h3></div></div>
            <div><h3>FRI</h3><div className={`reportDate${(bool[5]?"YES":"NO")}`}><h3>1</h3></div></div>
            <div><h3>SAT</h3><div className={`reportDate${(bool[6]?"YES":"NO")}`}><h3>1</h3></div></div>
            <IoArrowForwardCircleOutline className='reportNav' size={40} onClick={handleFroward}/>
        </div>
    </div>
   

    </>
    );
}

export default Report;