import React, { Component } from 'react'

class App9 extends Component{
    // constructor(){
    //     super();
    //     this.hello=this.hello.bind(this);
    // }
    constructor(){
        super();
        this.state={
            name:"Sonu Ram"
        }
    }
   
    hello=()=> {
        console.log("You Clicked me!!",this);
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <button onClick={this.hello}>Click Here</button>
        </div>
      )
    }
}

export default App9;