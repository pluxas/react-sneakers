import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import Products from '../../products'
import { addProduct } from '../slice/productSlice'
import first from '../../assets/images/3.png'

const Third = () => {
    const dispatch = useDispatch()

    const addedProduct = (product) => {
        dispatch(addProduct(product))
    }

    const product = Products[2]

    return (
        <div className='first'>
            <NavLink to='/' className="first__icon">
                <GlobalSvgIcons id='back' />
            </NavLink>
            <div className='first__hover'>
                <img className='img' src={first} alt="" />
                <button onClick={() => addedProduct(product)} className='hover'>ADD TO CART</button>
            </div>
            <div className="first__content">
                <h1 className='first__content-name'>Мужские Кроссовки Nike Air Max 270</h1>
                <p className="first__content-price">8 499 руб.</p>
            </div>
        </div>
    )
}

export default Third