import React, { useState,useEffect } from 'react'

const Timer=()=>{
    const[time,SetTime]=useState(new Date());

    useEffect(() => {
        const interval=setInterval(()=>{
            SetTime(new Date())
            console.log("Component is Unmounted")
        },1000)
        return () => (
            //cleanup
            clearInterval(interval)
        )
    },[])
    return(
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Timer;
