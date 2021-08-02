import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../assets/default-image.jpeg'
const Product = ({image, name, price}) => {
  const url = image && image.url
  return (<article className='product'>
  <img src={image.url || defaultImage} alt={name}/>
  <h4>{name}</h4>
  <p>${price}</p>
  </article>);
};

Product.propTypes = {
  //will give error on whenever props are missing
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

//default values for undefinied props
Product.defaultProps = {
  name: 'default name',
  price:3.99,
  image: defaultImage
}

//NOTE: we can also use || operator to set up default values of props

export default Product;
