import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Favorite from "./components/Favorite";
import { useDispatch, useSelector } from "react-redux";
import First from "./components/ModalProducts/First";
import Second from "./components/ModalProducts/Second";
import Third from "./components/ModalProducts/Third";
import Forth from "./components/ModalProducts/Forth";
import { fetchData } from "./components/slice/apiSlice";

function App() {
  const [modal, setModal] = useState(false);
  const products = useSelector((state) => state.cart.product);
  const myProducts = useSelector((state) => state.cart.myProducts);
  const favorite = useSelector((state) => state.cart.favoriteProducts);
  const dispatch = useDispatch()  

  const product = products.map((product) => product);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(product));
  }, [product]);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(myProducts));
  }, [myProducts]);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="container">
      <Header openModal={openModal} />
      <div className="line"></div>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/Nike Blazer Mid Suede" element={<First/>} />
          <Route path="/Nike Air Max 270" element={<Second/>}/>
          <Route path="/Nike Blazer Mid Suede White" element={<Third/>}/>
          <Route path="/Puma X Aka Boku Future Rider" element={<Forth/>}/>
        </Routes>
      </div>
      <Modal closeModal={closeModal} modal={modal} />
    </div>
  );
}

export default App;
