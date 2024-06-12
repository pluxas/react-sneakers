import React from 'react'
import { Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './Second'
import Third from './Third'
import Forth from './Forth'

const ModalProducts = ({ product }) => {
    return (
        <Routes>
            <Route path="/Nike Blazer Mid Suede" element={<First />} />
            <Route path='' element />
            <Route path='' element />
            <Route path='' element />
        </Routes>
    )
}

export default ModalProducts