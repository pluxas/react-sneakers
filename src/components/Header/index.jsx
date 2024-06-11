import React from 'react'

import './Header.scss'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = ({ openModal }) => {
    const product = useSelector((state) => state.cart.product)
    const totalPrice = product.reduce((acc, price) => (acc += price.price), 0);

    return (
        <div className='header'>
            <NavLink to='/' className="header__left">
                <img src={logo} alt="" />
                <div className='header__left-content'>
                    <h3 className='title'>REACT SNEAKERS</h3>
                    <p className='text'>Магазин лучших кроссовок</p>
                </div>
            </NavLink>
            <div className="header__right">
                <div onClick={openModal} className='header__right-content'>
                    <GlobalSvgIcons id='cart' />
                    <p>{totalPrice} руб.</p>
                </div>
                <NavLink to='/favorite' className='header__right-content'>
                    <GlobalSvgIcons id='favorite' />
                    <p>Закладки</p>
                </NavLink>
                <NavLink to='./profile' className='header__right-content'>
                    <GlobalSvgIcons id='user' />
                    <p>Профиль</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Header