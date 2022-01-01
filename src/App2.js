import React from "react";
import './App.css'
//import {useNavigate} from 'react-router-dom';

function App2(){
    return(
      <center>
        <form className="login">
            <center> <b><span id="nm">Login</span></b><b/></center>
              
            
                <div className="name"><b/>
                <span id="first">UserName:</span><br/>
                <input type="text" id="name" name="name" placeholder="Enter your UserName"/>
                </div><br/><b/>
                <div className="pass">
                <span id="second">Password:</span><br/>
                <input type="text" id="password" placeholder="Enter your password" />
                </div>
                <br/>
                <input type="submit" value="Login" id="submit" />

        </form>
        </center>
    )
}

export default App2;