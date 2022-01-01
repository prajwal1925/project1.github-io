import React,{useState,useMemo} from 'react'

const Memo = () => {
    const[number,setNumber]=useState()
    const [i,setI]=useState(0)
    const handleChange=(e)=>{
        setNumber(e.target.value)
    }
    // const Product=useMemo(()=>{multiplication(number)},[number]);
     const Product=useMemo(()=>{
      return  multiplication(number)
     },[number])
     //const Product=multiplication(number)
    return (
        <div style={{position: 'absolute',
            left: '40%',
            top: '40%'
        }}>
            <input placeholder='enter number' onChange={handleChange}/>
            <span>The result is{Product}</span> <br/>
            {/* <button onClick={()=>{setI(i+5)}}>Value of I is {i}</button> */}
        </div>
    )
}

const multiplication=(n)=>{
    console.log('multiplication is rendering')
    return n>0?n*2:0;
}
export default Memo;