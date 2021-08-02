import React from 'react'
import Product from './Product'
import { useFetch } from '../9-custom-hooks/final/2-useFetch'

 const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  //grabbing the products from useFetch return
  const { products } = useFetch(url)
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          //{...product} will pass down all the individual properties of product
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
