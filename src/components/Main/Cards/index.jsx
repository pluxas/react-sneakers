import React from 'react'

import './Cards.scss'
import Products from '../../../products'
import Card from './Cards'

const Cards = ({input}) => {

  return (
    <div className='product'>
      {Products.filter((item) => item.name.toLowerCase().includes(input.toLowerCase())).map(products => (
        <Card products={products}/>
      ))}
    </div>
  )
}

export default Cards