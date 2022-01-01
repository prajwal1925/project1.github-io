import React, { Component } from 'react'
import './Main.css';

export default class API extends Component {
    
    constructor(props){
        super(props)

        this.state={
            arr:[]
        }
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                arr:result
            })
            console.log(result)
        })
        .catch(error=>console.log(error))
    }
    render() {
        return (
            
            <div>
                <div>
                    <h1 style={{textAlign:'center',color:'blue'}}>REACT API DATA</h1>
                    <center><table className='table1'>
                        <th className='Head'>
                          <td>Image</td>
                          <td>Title</td>
                           <td>Price</td>
                           <td>Count</td> 
                       </th>
                    </table></center>
               
                            
                </div>
                {
                    this.state.arr.map((item)=>
                   <center><table className='table2'>
                        <th className='item'>
                            <td><img src={item.image} width='100px' height='100px' /></td>
                            <td><h6>{item.title}</h6></td>
                            <td><h6>{item.price}</h6></td>
                            <td><h6>{item.count}</h6></td>
                       </th>
                    </table></center>
                
                    )}
            </div>
        )
    }
}
