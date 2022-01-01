import React,{useState} from "react";
import './Add.css'

    const Inc=()=>{

        const [num,setNum]=useState(0);

        const plus =()=>{
            setNum(num+1)
        }

        const minus =()=>{
            setNum(num-1)
        }

    return(
        <center>
            <div className="Add">
            <button onClick={plus}>+</button>
            <h1 >{num}</h1>
            <button onClick={minus}>-</button>
        </div>
        </center>  
    )
    }


export default Inc;