import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value


const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  //The value prop of input tag refrences the state value. This is called controlled input
  //setState inside the onChange prop
  //hence without the onChange prop we cannot see what we type, since the default value is empty strings
  

  const handleSubmit = (e) => {
    e.preventDefault() //prevents refresh of page
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
     }
  }

  return (<div>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control"><label htmlFor="firstname">Name:</label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={ (e)=>setFirstName(e.target.value)}/>
        </div>
        <div className="form-control"><label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={ email} onChange={ (e)=>setEmail(e.target.value)}/>
        </div>
        <button type="submit">Add person</button>
      </form>
      {
        people.map((person) => {
          const { id, firstName, email } = person
          return <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        })
      }
    </article>
  </div>)
  ;
};

export default ControlledInputs;
