import React, { Component } from 'react'
import Info from './Info'

export default class App13 extends Component {
    constructor(props){
        super(props)
        console.log("Constructed called!!")
        console.log(props);
        this.state={
            roll:101
        }
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("App-Get Derived State from Props");
        console.log(props,state);
        return null;
    }
    componentDidMount(){
        // get data from server and set data in state
        console.log("ComponentDidMount is called!")
    }
  
  render() {
    console.log("App rendered!!")
    return (
      <div>
        <Info city='Tohana' />
      </div>
    )
  }
}
