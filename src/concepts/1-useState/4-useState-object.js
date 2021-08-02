import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "megha",
    age: "19",
    message: "Yo wassup"
})

  //use spread operator to copiy the values and then overwrite the property you need to change
  //if we just pass msg property then other values will be wiped ouy
  const msgHandler = () => {
    setPerson({ ...person ,message: "Change Message" })
  }

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={msgHandler}>Change Message</button>
    </React.Fragment>
  );
};

//An alternative to pass objects as argument to useState we can also break it down and pass individual properties using multiple useState

export default UseStateObject;
