import React from 'react'

import first from '../../assets/images/1.png'
import Products from '../../products'
import './ModalProducts.scss'
import { useDispatch } from 'react-redux'
import { addProduct } from '../slice/productSlice'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import { NavLink } from 'react-router-dom'


const First = () => {
  const dispatch = useDispatch()

  const addedProduct = (product) => {
    dispatch(addProduct(product))
  }

  const product = Products[0]

  return (
    <div className='first'>
      <NavLink to='/' className="first__icon">
        <GlobalSvgIcons id='back' />
      </NavLink>
      <div className='first__hover'>
        <img className='img' src={first} alt="" />
        {/* {Products.map(product => ( */}
          <button onClick={() => addedProduct(product)} className='hover'>ADD TO CART</button>
        {/* ))} */}
      </div>
      <div className="first__content">
        <h1 className='first__content-name'>Мужские Кроссовки Nike Blazer Mid Suede</h1>
        <p className="first__content-price">12 999 руб.</p>
      </div>
    </div>
  )
}

export default First