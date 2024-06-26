import React from 'react'

import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import Products from '../../products'
import './Profile.scss'
import emoji from '../../assets/images/image 9.png'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../components/slice/useUser'
import { useAuth } from '../../hooks/use-auth'
import HomePage from '../Authorization/AuthorizationPage'

const Profile = () => {
    const myProduct = useSelector(state => state.cart.myProducts)
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()

    return isAuth ? (
        <div>
            {myProduct != null > 0 ?
                <div className='profile'>
                    <div className="profile__header">
                        <NavLink to='/'>
                            <GlobalSvgIcons id='back' />
                        </NavLink>
                        <h1>Мои покупки</h1>
                        <button className='button_log_out' onClick={() => dispatch(logout())}>Log out</button>
                    </div>
                    <div className="profile__product">
                        {myProduct.map(product => (
                            <div key={product.id} className='product__content'>
                                <div className='high'>
                                    <div className='icon'>
                                        <GlobalSvgIcons id='heart' />
                                    </div>
                                    <img src={product.image} alt="" />
                                    <h3>{product.name}</h3>
                                </div>
                                <div className='icon__two'>
                                    <p>Цена: <br /> <span>{product.price} руб.</span></p>
                                    <div>
                                        <GlobalSvgIcons id='add' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
                :
                <Link to='/' className='profile__another'>
                    <img src={emoji} alt="" />
                    <h1>У вас нет заказов</h1>
                    <p>Вы нищеброд?  <span>Оформите хотя бы один заказ.</span></p>
                    <button>Вернуться назад</button>
                </Link>
            }
        </div>
    ) : <HomePage/>
}

export default Profile