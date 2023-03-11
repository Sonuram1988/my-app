// import React,{Component} from "react";

// class App8 extends Component{
//     state={
//         name:'Sonu',
//         city:'Tohana',
//         profile:this.props.profile
//     }
//     render() {
//       return (
//         <div>
//           <h1>Name: {this.state.name}</h1>
//           <h1>City: {this.state.city}</h1>
//           <h1>Profile: {this.state.profile}</h1>
//         </div>
//       )
//     }
// }

import React, { Component } from 'react'
class App8 extends Component{
  
    constructor(props){
        super(props);
        this.state={
            name:'Sonu Ram',
            city:'Tohana',
            profile:this.props.profile
        }
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <h2>{this.state.city}</h2>
          <h3>{this.state.profile}</h3>
        </div>
      )
    }
}
export default App8;