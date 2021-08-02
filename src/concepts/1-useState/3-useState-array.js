import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const handleClear = () => {
    setPeople([]);
  };

  const handleRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <React.Fragment>
      {people.map((person) => (
        <div className="item" key={person.id}>
          <h4> {person.name}</h4>
          <button onClick={() => handleRemove(person.id)}>
            Remove
          </button>
        </div>
      ))}
      <button className="btn" onClick={handleClear}>
        Clear Items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
