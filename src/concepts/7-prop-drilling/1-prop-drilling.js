import React, { useState } from 'react';
import {data} from '../../data'

// more components
// fix - context api, redux (for more complex cases)
//prop drilling: passing props through component tree even if they are not required in the intermediate components

const PropDrilling = () => {
const [people, setPeople] = useState(data)
const removePerson = (id) => {
  setPeople(
    (people) => {
      return people.filter (person => person.id !== id)
    }
  )
}

  return (
    <section>
    <h3>
    prop drilling
    </h3>
    <List people={people} removePerson={removePerson}/>
    </section>

  );
};

const List = ({people, removePerson}) => {
 
  return (
    <div>
    {people.map(person => {
       
       return <SinglePerson key={person.id} removePerson={removePerson} {...person} /> 
    })}
    </div>
  )
}

const SinglePerson = (props) =>{
  console.log(props)
  return (
    <div className="item">
    <h4>{props.name}</h4>
     <button onClick={() => props.removePerson(props.id)}>remove</button>
    </div>
  )
}


export default PropDrilling;
