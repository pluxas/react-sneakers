import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import Products from '../../products'
import { addProduct } from '../slice/productSlice'
import first from '../../assets/images/3.png'
import Loading from '../Loading'

const Third = () => {
    const dispatch = useDispatch()
    const { data, status } = useSelector(state => state.apiSlice)


    const addedProduct = (product) => {
        dispatch(addProduct(product))
    }

    const product = Products[2]

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
                    <h1 className='first__content-name'>Мужские Кроссовки Nike Air Max 270</h1>
                    <p className="first__content-price">8 499 руб.</p>
                </div>
            </div>
            {status === 'loading' && <Loading />}
            {status === 'secceeded' && (
                <div>
                    <h1 className='reviews3'>Отзовы</h1>
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

export default Third