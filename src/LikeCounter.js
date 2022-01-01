import React,{Component} from "react";
import HOC from "./HOC";
class LikeCounter extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.CountNumber}</h1>
                <button onClick={this.props.handleClick}>Like</button>
            </div>
        )
    }
}
const EnhancedLikes=HOC(LikeCounter,7);
export default EnhancedLikes;