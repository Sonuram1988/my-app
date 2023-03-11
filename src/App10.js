import React from "react";

function App10(props){
    function event(e){
        e.preventDefault();
        console.log("You clicked me")
    }    
    return(
        <div>
            <h1>Hello!</h1>
            <h2>{props.name}</h2>
            <a href="https://www.google.com" onClick={event}>Click Here</a>
        </div>
    )
}
export default App10;