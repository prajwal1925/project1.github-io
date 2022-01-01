// import React, { Component } from 'react'

// export default class LifeCycle extends Component {
//     constructor(props) {
//         super(props)
//        this.state = {
//              roll:50 
//         }
//         console.log('I am Constructor')
//     }
  
//     static getDerivedStateFromProps(props,state){
//         console.log("Static getDerivedStateFrom Props",props,state)
//         return{
//             roll:props.val+state.roll
//         }
//     }
//     componentDidMount(){
//         console.log('New Component is mounted')
//     }
//      render() {
//         console.log("I am Rendering")
//         return (
//             <div>
//                 <h1>My state value is:{this.state.roll}</h1>
//             </div>
//         )
//     }
// } 


// import React, { Component } from 'react'

// export default class LifeCycle extends Component {
//    constructor(props) {
//        super(props)
   
//        this.state = {
//             num:0
//        }
//    }

//    shouldComponentUpdate(){  
//        console.log("should update",this.state.num)
//        if(this.state.num>5 && this.state.num<10){

//         return true
//        }
//        return null
//    }
//    getSnapshotBeforeUpdate(prevProps,prevState){
//        return "somevalues" 
//    }
      
//    componentDidUpdate(prevProps,prevState,snapshot){
//        console.log('Component is updating')
//    }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.num}</h1>
//                 <button onClick={()=>{this.setState({num:this.state.num+1})}}>Increase</button>   
//             </div>
//         )
//     }
// } 


import React, { Component } from 'react'
export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
    }
    render() {
        return (
            <div>
                 {/* condition?true:false */}
                 { this.state.show?<Child/>:null}
                  <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child</button>
            </div>
        )
    }
}
 class Child extends Component {
    componentWillUnmount()
    {
        alert('component will remove')
        console.log('Component is removed')
    }
    render() {
        return (
            <div>
                <h2>I am Child Component</h2>
            </div>
        )
    }
}