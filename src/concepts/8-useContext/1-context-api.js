import React, { useState, useContext } from 'react';
import { data } from '../../data';
// more components
// fix - context api, redux (for more complex cases)


const PersonContext = React.createContext();
//now we have access to two components -> provider, consumer



const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

//wrap the parent component with PersonContext.Provider and pass value prop
//this value can be accesed by all child components irrespective of its level
  return (
     <PersonContext.Provider value={{removePerson, people}}>
      <h3>Context API</h3>
      <List/>
     </PersonContext.Provider>
  );
};

const List = () => {
  // const {people} = useContext(PersonContext)
//can do it without destructuring object properties also
  const mainData = useContext(PersonContext);return (
    <React.Fragment>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
           
          />
        );
      })}
    </React.Fragment>
  );
};

const SinglePerson = ({ id, name }) => {
  // using destructuring
  const {removePerson} = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
