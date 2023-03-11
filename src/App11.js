import React, { Component } from 'react'


class App11 extends Component{
    constructor(){
        super();
        this.state={
            name:"Sonu Ram",
        }
    }
    clickme=()=>{
        // this.setState({name:"Shiva"});
        this.setState(function(state,props){
            console.log(state);
            this.setState({name:'Shiva'})
        })
    }
    render() {
      return (
        <div>
            <h1>This is State in Class</h1>
            <h1>{this.state.name}</h1>
            <button onClick={this.clickme}>Click Here</button>
        </div>
      )
    }
}


export default App11;