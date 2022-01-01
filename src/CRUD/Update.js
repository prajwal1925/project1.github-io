import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
const Update = () => {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate();
    useEffect(()=>{
     setName(localStorage.getItem('name'))
     setEmail(localStorage.getItem('email'))
     setPassword(localStorage.getItem('password'))
    },[])
    const sendDatatoApi=(e)=>{
        e.preventDefault()
        axios.put(`https://61c5b255c003e70017b79869.mockapi.io/CRUD/${password}`,{
           name,
           email,
           password  
    }
        ).then(()=>{
            alert('updated successfully')
         navigate('/create')
        })
    }
    return (
        <div>
        <center>
            <Form className='update'>
      <h4>Update</h4>
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
<span><Link to="/" ><Button>Back</Button></Link></span>
</center>

        </div>
    )
}

export default Update