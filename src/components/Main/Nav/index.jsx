import React from 'react'

import './Nav.scss'
import GlobalSvgIcons from '../../../assets/icons/GlobalSvgIcons'

const Nav = ({changeInput, input}) => {
  return (
    <nav className='nav'>
        <h1>Все кроссовки</h1>
        <div>
            <GlobalSvgIcons id='search'/>
            <input onChange={changeInput} value={input} type="text" placeholder='Поиск...'/>
        </div>
    </nav>
  )
}

export default Nav