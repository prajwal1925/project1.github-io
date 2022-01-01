import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Home() {
    return (
    <>
     
        <h2 style={{opacity:'40%',marginLeft:'6%',marginTop:'2%'}}>Hello World...</h2>
    

        <div className='home'>
            
            <center>
        <span><Link to="/create">
     <Button>New User</Button></Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><Link to="/user"><Button>Admin</Button></Link></span>
       </center> </div>
    </>
        
    )
}

export default Home;
