import React, { useState } from 'react';

const UseStateCounter = () => {
const [value, setValue] = useState(0)

  
  const handleDecrease = () => {
    setValue(prevValue => prevValue - 1) 
  }
  const handleReset = () => {
    setValue(prevValue => 0) 
  }
  const handleIncrease = () => {
    setValue(prevValue => prevValue + 1) 
  }

  const handleDecreaseLater = () => {
    setTimeout(() => {
      setValue(prevValue => prevValue - 1) 
    }, 5000)
  }
  return (
    <React.Fragment>
      <section style={{margin : "5em 0"}}>
      <h2>Noob Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
      <button className="btn" onClick={() => setValue(0)}>Reset</button>
      <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
      </section>

      <section style={{margin : "5em 0"}}>
      <h2>Pro Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={handleDecrease}>Decrease</button>
      <button className="btn" onClick={handleReset}>Reset</button>
      <button className="btn" onClick={handleIncrease}>Increase</button>
      </section>
    
      <section style={{margin : "5em 0"}}>
      <h2>Delay Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={handleDecreaseLater}>Decrease</button>
      
      </section>
      
    </React.Fragment>
  );
};

export default UseStateCounter;
