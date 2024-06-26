import React from 'react'

import './Header.scss'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth } from '../../hooks/use-auth'

const Header = ({ openModal }) => {
    const product = useSelector((state) => state.cart.product)
    const totalPrice = product.reduce((acc, price) => (acc += price.price), 0);
    const { isAuth, email} = useAuth()

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
                <Link to={isAuth ? '/profile' : '/authorization'} className='header__right-content'>
                    <GlobalSvgIcons id='user' />
                    <p>Профиль</p>
                </Link>
            </div>
        </div>
    )
}

export default Header