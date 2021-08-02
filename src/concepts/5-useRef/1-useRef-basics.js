import React, { useEffect, useRef } from 'react';

// preserves value like Usestate
// but DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
//useRef returns a object having current property
//unControlled input since the value of input tag is not using any state value or onChange prop to update values
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value)
  }
  useEffect(
    () => {
      refContainer.current.focus(); //target the input element and focuses on it whenever app starts
    }
  )

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refContainer} />
        <button type="submit">
        Submit</button>
      </div>
    </form>

  );
};

export default UseRefBasics;
