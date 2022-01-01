import React, { Component } from "react";

import HOC from "./HOC";

class CommentCounter extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.CountNumber}</h1>
                <button onClick={this.props.handleClick}>Comment</button>
            </div>
        )
    }
}

const EnhancedComments=HOC(CommentCounter,2);
export default EnhancedComments;