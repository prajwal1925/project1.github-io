import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import axios from 'axios';
import {Link,useNavigate} from "react-router-dom"

function Admin() {
  const[user,setUser]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()

  const sendDatatoApi=(e)=>{
     e.preventDefault()
        if(user=="prajwal" && password!="prajwal@1925"){
          alert("password is invalid")
        }
        else if(user!="prajwal" && password=="prajwal@1925"){
          alert("user is invalid")
        }
        else if(user=="prajwal" && password=="prajwal@1925"){
          navigate("/read")
        }
  }

  const userHandle=(e)=>{
      setUser(e.target.value)
  }

  const passwordHandle=(e)=>{
    setPassword(e.target.value)
  }
    return (
        <div> <center>
            
            <Form className='form'>
              <h4>LOGIN</h4>    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Id" onChange={userHandle}/>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={passwordHandle}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button variant="primary" type="submit" onClick={sendDatatoApi}>
            Submit
          </Button>
        </Form>
        <span><Link to="/" ><Button>Back</Button></Link></span>
            </center>
        </div>
    )
}

export default Admin;
