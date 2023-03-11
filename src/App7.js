// import React from "react";
import React,{Component} from "react";

// function App7(props) {
//     return(
//         <div>
//             <h1>{props.children}</h1>
//         </div>
//     )
    
// }
// export default App7;

class App7 extends Component{
    render() {
      return (
        <div>
          <h1>{this.props.children}</h1>
        </div>
      )
    }
}

export default App7;