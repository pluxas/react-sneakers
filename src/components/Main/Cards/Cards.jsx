import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavoriteProducts, addProduct } from '../../slice/productSlice'
import GlobalSvgIcons from '../../../assets/icons/GlobalSvgIcons'

const Card = ({ products }) => {
    // const product = useSelector(state => state.cart.product)
    const dispatch = useDispatch()
    const [isAdded, setIsAdded] = useState(false)
    const [isAdd, setIsAdd] = useState(false)

    const onClickPlus = () => {
        setIsAdded(true)
    }

    const favoriteProduct = (product) => {
        dispatch(addFavoriteProducts(product))
        setIsAdd(true )
    }

    const addedProduct = (product) => {
        dispatch(addProduct(product))
    }

    return (
        <div key={products.id} className='product__content'>
            <div className='high'>
                <div onClick={() => favoriteProduct(products)} className='icon'>
                    {isAdd ? <GlobalSvgIcons id='love'/> : <GlobalSvgIcons id='heart'/>}
                </div>
                <img src={products.image} alt="" />
                <h3>{products.name}</h3>
            </div>
            <div className='icon__two'>
                <p>Цена: <br /> <span>{products.price} руб.</span></p>
                <div>
                    <div onClick={onClickPlus}>
                        {isAdded ? <GlobalSvgIcons id='added'/>: <div onClick={() => addedProduct(products)}><GlobalSvgIcons id='add' /></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card