import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'
//import useFetch Custom hook
//Custom hooks are used when we want to reuse the functionality

const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
 
 const {loading, products} = useFetch(url)
  console.log(products) //we can still fetch products using the custom hook
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
