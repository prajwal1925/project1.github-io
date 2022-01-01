import React, { PureComponent } from "react";
export default class First extends PureComponent{
    constructor(){
        super()

        this.state={
            num:0
        }
    }
    handleClick=()=>{
        this.setState({num:this.state.num+1})
    }
    render(){
        console.log('I am Rendering')

        return(
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.handleClick}>Change</button>
            </div>
        )
    }
}