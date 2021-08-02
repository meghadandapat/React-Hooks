import { useState, useEffect } from 'react';

//custom hooks must begin with use keyword
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])
  return {loading, products}
  //returning an object
  //note when key name is same as value we can write a shorthand syntax for object like above
  //this is same as {loading:loading, products:products} 
};
