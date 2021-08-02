import React from 'react';

const ErrorExample = () => {


  let title = 'random title'

  const clickHandler = () => {
    title = 'another title'
    console.log(title);
  }
//the value of update will change but it does not cause re-render of component
  //hence the ui is not updated



  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" type="buttton" onClick={clickHandler}>Change Title</button>
    </React.Fragment>
  );
};

export default ErrorExample;
 