import { render } from "@testing-library/react";
import React,{Component} from "react";
class Add extends Component{
    constructor(){
        super()
        this.state={
            name:'Prajwal',age:'22',city:'Belagavi'
        }
    }
        handleclick=()=>{setTimeout(()=>{
            this.setState({name:'Adya',age:'21',city:'Bangalore'})
        },1000)
            
        }
    
    render(){
        const{name,age,city}=this.state
        return(
            <div>
                <h1>{name}</h1>
                <h1>{age}</h1>
                <h1>{city}</h1>
                <button onClick={this.handleclick}>Change</button>
            </div>
        )
    }
}
    export default Add;


