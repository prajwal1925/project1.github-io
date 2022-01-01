import React,{useReducer} from 'react'
let initialState={
   firstCount:0
};
const reducer=(state,action)=>{
     switch(action.type){
         case 'increase':return {firstCount:state.firstCount+action.value};
         case 'decrease':return {firstCount:state.firstCount-action.value};
         case 'reset':return initialState;
         case 'default':return state;
     }
}
const IncDec = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state.firstCount}</h1>
            <button onClick={()=>dispatch({type:'increase',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrease',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default IncDec;