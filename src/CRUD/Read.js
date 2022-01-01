import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Button,Table} from 'react-bootstrap'

const Read=()=> {
  const[data,setData]=useState([])
  const[search,setSearch]=useState("")
  useEffect(()=>{
    axios.get('https://61c5b255c003e70017b79869.mockapi.io/CRUD')
    .then((res)=>setData(res.data))
  },[])
  const setId=(id,name,email,password)=>{
  localStorage.setItem('ID',id)
  localStorage.setItem('name',name)
  localStorage.setItem('email',email)
  localStorage.setItem('password',password)
  
  
}
const getData=()=>{
  axios.get('https://61c5b255c003e70017b79869.mockapi.io/CRUD')
  .then((res)=>setData(res.data))
}
const onDelete=(id,name)=>{
  axios.delete(`https://61c5b255c003e70017b79869.mockapi.io/CRUD/${id}`)
  .then(()=>{alert(`u are deleting ${name}`)
      
      getData()})
}
    return (
        <div>
          <center><input type="search" style={{marginTop:"30px", width:"200px", height:"30px", border:"1px solid black"}} placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}} /></center>
           <br/> <Table striped bordered hover variant="light" className='table'>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email ID</th>
      <th>Password</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      {
        data.filter((value)=>{
          if(setSearch===""){
            return value
          }
          else if(value.name.toLowerCase().includes(search.toLowerCase())){
            return value
          }
        })
           
        .map((item,i)=>
    <tr key="i">
      <td>{i+1}</td>
      <td><h6 className='text-secondary'>{item.name}</h6></td>
      <td><h6 className='text-success'>{item.email}</h6></td>
      <td><h6 className='text-password'>{item.password}</h6></td>
      <td><Link to="/update"><Button  className='btn btn-warning' onClick={()=>setId(item.id,item.name,item.email,item.password)}>Update</Button> </Link></td>
      <td><Button className='btn btn-danger btn-outline-light' onClick={()=>{onDelete(item.id,item.name,item.email,item.password)}}>Delete</Button></td>
    </tr>
)}  
  </tbody>
</Table>
<center><span><Link to={'/'}><Button>Home</Button></Link></span></center>
        </div>
    )
      }
    
export default Read;
