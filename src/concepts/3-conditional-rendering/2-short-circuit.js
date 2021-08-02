import React, { useState } from 'react';
//we cannot use if inside JSX since it does not return any value
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  //text is falsy value

 /* OR -> if first value is falsy then second value is returned and if first value is truthy then first value is returned

  AND -> if first value is falsy
  then it will return firstvalue and if first value is truthy then the second value will be returned*/

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
 

  /*or is used when we want a component to be returned reardless like a default value whereas and is used to show or hide components 

  ternary operator is used when we want a particular value if condition is true and another if condition is false*/

  const [isError, setIsError] = useState(false)
  


  return (
    <React.Fragment>
      <h1>FirstValue: {firstValue}</h1>
      <h1>SecondValue: {secondValue}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error..</h1>}
      {
        isError ? (<p>There is Error....</p>) : (
          <div><h2>There is no error....</h2></div>
        )
      }
    </React.Fragment>

  );
};

export default ShortCircuit;
