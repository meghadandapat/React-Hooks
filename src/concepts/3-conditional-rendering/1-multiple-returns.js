import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';



const MultipleReturns = () => {

  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});
  
  const getData = async() => {
    const response = await fetch(url)
    if (response.status >= 200 && response.status <= 299) {
      const mydata = await response.json()
      setData(mydata)
      setIsLoading(false)
    }
    else {
      setIsLoading(false)
      setIsError(true)
      throw new Error(response.statusText)
    }
       
   
  }
  useEffect(() => {
    getData()
  }, [])


  if(isloading){
    return <h2>Loading....</h2>
  }

  if (isError) {
    return<h2>Error...</h2>
  }

  return (
    <li>{ data.login}</li>
  );
};

export default MultipleReturns;
