import React,{Component} from "react";

class Student1 extends Component{
    render(){
        return(
            <h1>My name is {this.props.name}</h1>
        )
    }
}

export default Student1;