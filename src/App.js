import React,{Component} from 'react';
import "./App.css"
class App extends Component{
    render(){
        console.log("Hello! This is fragment!!!")
        return(
            // <div style={{backgroundColor:'skyblue'}}>
            //     <h1>Hello! React</h1>
            //     <h2>I am in inside h2</h2>
            // </div>

            // <React.Fragment>
            //     <h1>Hello!!-----!!!</h1>
            //     <h2>This is fragment in react JS</h2>
            // </React.Fragment>

            <>
                <h1>Hello!!-----!!!</h1>
                <h2>This is fragment in react JS</h2>
            </>
        );
        // return <h1>Hello! Geeky Shows</h1>;
    }
}

export default App;
// let el=<h1>Hello! world</h1>
// export default el;









