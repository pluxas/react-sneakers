import React from 'react'

import './Slider.scss'
import calaba from '../../../assets/images/calaba.png'
import cartoon from '../../../assets/images/cartoon.png'

const Sliders = () => {

  return (
    <div className='block'>
      <img className='block__image' src={calaba} alt="" />
      <div className='block__content'>
        <div>
          <h2>Stan Smith<span>, <br />Forever!</span></h2>
          <button>Купить</button>
        </div>
        <img src={cartoon} alt="" />
      </div>
    </div>
  )
}

export default Sliders