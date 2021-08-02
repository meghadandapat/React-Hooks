import React, { useState } from "react";

const UseStateBasics = () => {
  //useState preseves the value between renders and also causes re-render of component when required
  //argument provides the default value
  //returns an array of two items-> value and function that controls the value

  const [title, setTitle] = useState("Random Title");

  const clickHandler = () => {

    //toggle functionality
  title==='Random Title' ? setTitle("Another Title") : setTitle("Random Title")
    
  };
  return (
    <React.Fragment>
    <h2>{title}</h2>
    <button className="btn" type="buttton" onClick={clickHandler}>Change Title</button>
  </React.Fragment>
)

 
};

export default UseStateBasics;
