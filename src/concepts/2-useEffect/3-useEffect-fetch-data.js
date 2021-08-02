import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url)
    const users = await response.json();
    setUsers(users);//causes re renders

  }

  //callback func cannot be async since it returns a promise and not a cleanup func so we can instead place async func inside the callback

  //if we do not add an empty array then it will cause infinite loop 
  useEffect(() => {
    getUsers()
  }, [])


  return (
    <React.Fragment>
      <h3>Github Users</h3>
      <ul className="users">
        
      {
          users.map(user => {
            const { id, login, avatar_url, html_url } = user;
            return <li key={id}>
              <img src={avatar_url} alt={login} />
              <div><h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>

            </li>
          }
          )
      }
      </ul>

    </React.Fragment>

  )

 
};

export default UseEffectFetchData;
