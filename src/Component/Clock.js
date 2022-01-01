import React, { useState } from 'react'
import Timer from './Timer'

const Clock=()=>{
    const[displayTime,setDisplaytime]=useState(true)
return(
    <div>
        {displayTime?<Timer/>:null}
        <button onClick={()=>setDisplaytime(!displayTime)}>{displayTime?"Hide the clock":"Show the clock"}</button>
    </div>
)
}

export default Clock;