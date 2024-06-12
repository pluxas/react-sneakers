import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addProduct } from '../slice/productSlice'
import Products from '../../products'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import first from '../../assets/images/4.png'

const Forth = () => {
    const dispatch = useDispatch()

    const addedProduct = (product) => {
        dispatch(addProduct(product))
    }

    const product = Products[3]

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
                <h1 className='first__content-name'>Кроссовки Puma X Aka Boku Future Rider</h1>
                <p className="first__content-price">8 999 руб.</p>
            </div>
        </div>
    )
}

export default Forth