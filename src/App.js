import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Favorite from "./components/Favorite";
import { useSelector } from "react-redux";


function App() {
  const [modal, setModal] = useState(false)
  const products = useSelector(state => state.cart.product)
  const myProducts = useSelector(state => state.cart.myProducts)
  const favorite = useSelector(state => state.cart.favoriteProducts)


  const product = products.map(product => product)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(product))
  }, [product])

  useEffect(() => {
    localStorage.setItem('product', JSON.stringify(myProducts))
  }, [myProducts])

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite))
  }, [favorite])

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="container">
      <Header openModal={openModal}/>
      <div className='line'></div>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Main/>}/> 
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
        </Routes>
      </div>
      <Modal closeModal={closeModal} modal={modal}/>
    </div>
  );
}

export default App;
