import React from "react";

const App5=props=>{
    return(
        <div>
            <h1>My name is :{props}</h1>
            <h2>I live at:{props.city}</h2>
            <h3>Hey,my age is :{props.age}</h3>
        </div>
    );
}

export default App5;