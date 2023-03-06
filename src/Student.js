import React from "react"
// function Student() {
//     return <h1>Hello!</h1>
// }

const Student=(props)=>{
    return(
        <>
         <h1>Name:{props.name}</h1>
         <h2>Hello!</h2>
        </>
       
    );
  
}

export default Student;