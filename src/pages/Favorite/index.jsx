import React from 'react'

import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import { Link, NavLink } from 'react-router-dom'
import Products from '../../products'
import './Favorite.scss'
import { useSelector } from 'react-redux'
import emoji from '../../assets/images/image 9 (1).png'

const Favorite = () => {
    const favorite = useSelector(state => state.cart.favoriteProducts)

    return (
        <div>
            {favorite.length > 0 ?
                <div className='favorite'>
                    <div className="favorite__header">
                        <NavLink to='/'>
                            <GlobalSvgIcons id='back' />
                        </NavLink>
                        <h1>Мои закладки</h1>
                    </div>
                    <div className="favorite__product">
                        {favorite.map(product => (
                            <div key={product.id} className='product__content'>
                                <div className='high'>
                                    <div className='icon'>
                                        <GlobalSvgIcons id='love' />
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
                </div> 
                :
                <Link to='/' className='profile__another'>
                    <img src={emoji} alt="" />
                    <h1>Закладок нет :(</h1>
                    <p>Вы ничего не добавляли в закладки</p>
                    <button>Вернуться назад</button>
                </Link>}
        </div>
    )
}

export default Favorite