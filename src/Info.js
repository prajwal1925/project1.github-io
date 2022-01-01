import React,{useState} from "react";
const Info =()=>{
    const[details,setDetail]=useState({
        name:'Adi',age:'45',city:'bgm'});
    
    const change=()=>{
        setDetail({
            name:'Prajwal',
            age:'22',
            city:'bng'
        })
    }
    return(
        <div>
            <h1>{details.name}</h1>
            <h1>{details.age}</h1>
            <h2>{details.city}</h2>
            <button onClick={change}>Change</button>
        </div>
    )
}

export default Info;