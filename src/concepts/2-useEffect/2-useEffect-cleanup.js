import React, { useState, useEffect } from 'react';

// cleanup function
// second argument


const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerwidth)
  

  const checkSize = () => {
      setSize(window.innerWidth) //triggering re render
      //each nd everytime we resize the window we also trigger re render and again call useEffect
  }
  useEffect(() => {
    console.log('UseEffect')
    window.addEventListener('resize', checkSize)

    //The function placed inside return will be called everytime we exit
    //we can solve this adding multiple events by [] as dependency but it won't work in conditional rendering
    
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
    //Before every re render except the initial render, the cleanup function will run before useEffect
  })

  console.log('render')


 return (
    <React.Fragment>
     <h2>Window</h2>
     <h3>{size}px</h3>
     
    </React.Fragment>
  );
};

export default UseEffectCleanup;
