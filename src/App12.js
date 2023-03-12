import React, { Component } from 'react'


class App12 extends Component{
    constructor(){
        super();
        this.state={
            id:101,
            name:"Sonu Ram",
        }
    }
    handleClick=(id,e)=>{
        console.log(id,e,this);
    }

    // handleClickArg=(e)=>{
    //     return this.handleClick(this.state.id,e);
    // }
    
    render() {
      return (
        <div>
            <h1>This is State in Class</h1>
            <h1>{this.state.name}</h1>
            {/* <button onClick={this.handleClickArg}>Click Here</button> */}
            {/* <button onClick={(e)=>{this.handleClick(this.state.id,e)}}>Click Here</button> */}
            <button onClick={this.handleClick.bind(this,this.state.id)}>Click Here</button>
        </div>
      )
    }
}


export default App12;