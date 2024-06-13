import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../slice/productSlice'
import { NavLink } from 'react-router-dom'
import Products from '../../products'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import first from '../../assets/images/2.png'
import Loading from '../Loading'

const Second = () => {
    const dispatch = useDispatch()
    const { data, status } = useSelector(state => state.apiSlice)


    const addedProduct = (product) => {
        dispatch(addProduct(product))
    }

    const product = Products[1]

    return (
        <>
            <div className='first'>
                <NavLink to='/' className="first__icon">
                    <GlobalSvgIcons id='back' />
                </NavLink>
                <div className='first__hover'>
                    <img className='img' src={first} alt="" />
                    <button onClick={() => addedProduct(product)} className='hover'>ADD TO CART</button>
                </div>
                <div className="first__content">
                    <h1 className='first__content-name'>Мужские Кроссовки Nike Blazer Mid Suede</h1>
                    <p className="first__content-price">12 999 руб.</p>
                </div>
            </div>
            {status === 'loading' && <Loading />}
            {status === 'secceeded' && (
                <div>
                    <h1 className='reviews2'>Отзовы</h1>
                    {data.map(item => (
                        <div className='reviews__block'>
                            <h1 className='reviews__title'>{item.name}</h1>
                            <p className='reviews__text' key={item.id}>{item.body}</p>
                        </div>
                    ))}
                </div>
            )}
            {status === 'error' && <h1>Error 500</h1>}
        </>
    )
}

export default Second