import React,{Component} from "react";
import PropsTypes from 'prop-types';

class App6 extends Component{
    render() {
      return (
        <div>
          <h1>My name is :{this.props.name}</h1>
          <h1>My city is :{this.props.city}</h1>
          <h1>My age is :{this.props.age}</h1>
        </div>
      )
    }
}

App6.propTypes={
    // name:PropsTypes.string,
    name:PropsTypes.string.isRequired,
    age:PropsTypes.number
}

App6.defaultProps={
    name:"Geeky Shows"
}

export default App6;