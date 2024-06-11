import React, { useState } from 'react'
import Nav from './Nav'
import Cards from './Cards'
import Sliders from './Slider'


const Main = () => {
  const [input, setInput] = useState('')

  const changeInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
        <Sliders/>
        <Nav input={input} changeInput={changeInput}/>
        <Cards input={input}/>
    </div>
  )
}

export default Main