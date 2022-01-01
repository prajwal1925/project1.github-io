import React,{useState,useEffect} from 'react'
import {Button,Form} from 'react-bootstrap'
import axios from 'axios';
import {Link,Navigate,useNavigate} from 'react-router-dom'
import './Crud.css';

const Create=()=> {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigation=useNavigate()
    
    const sendDatatoApi=(e)=>{
        e.preventDefault();

        axios.post('https://61c5b255c003e70017b79869.mockapi.io/CRUD',{
          name,
          email,
          password
        }).then(()=>{
      
         alert("data is submitted")
         navigation("/")
        
        })

        
        
    }
    return (
        
        <div className='create'>
            <center>
            
    <Form className='form'>
      <h4>LOGIN</h4>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="submit" onClick={sendDatatoApi}>
    Submit
  </Button>
</Form>
<span><Link to="/" ><Button variant="btn btn-light border">Back</Button></Link></span>
    </center>
        </div>
  
    )
}

export default Create;
