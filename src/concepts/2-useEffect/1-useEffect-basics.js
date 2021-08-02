import React, { useState, useEffect } from 'react';

//useEffect allows us to do side effects->anything outside of component
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setValue(value + 1);
  }

  //Callback func will run everytime value changes
  useEffect(() => {
    if (value > 0) {
      document.title=`New Messages ${value}`
    }
    },[value])
//will run only once
  useEffect(
    () => {
  console.log("Hello World")
}, [])
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>Click Me!</button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
