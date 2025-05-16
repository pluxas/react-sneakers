import React, { useState } from "react";

import "./Modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearProduct, myProducts, removeProduct } from "../slice/productSlice";
import { get, getDatabase, push, ref, set } from "firebase/database";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import { database } from "../../firebase";
import list from "../../assets/images/check list.png";
import box from "../../assets/images/box.png";

const Modal = ({ modal, closeModal, setIsAdded }) => {
    const product = useSelector((state) => state.cart.product);
    const dispatch = useDispatch();

    const [order, setOrder] = useState(false);

    const totalPrice = product.reduce((acc, price) => (acc += price.price), 0);

    const calculateTax = (total, taxRate) => {
        return total * (taxRate / 100);
    };

    const taxRate = 5;
    const tax = calculateTax(totalPrice, taxRate);
    const totalTax = Math.floor(tax);

    const deleteProduct = (product) => {
        dispatch(removeProduct(product));
    };

    const fetchData = async () => {
        const db = database;
        const deRef = ref(db, "products");
        const snapshot = await get(deRef);
        if (snapshot.exists()) {
            dispatch(myProducts(Object.values(snapshot.val())));
        } else {
            alert("error");
        }
    };

    const name = product.map((product) => product.name);
    const image = product.map((product) => product.image);
    const id = product.map((product) => product.id);
    let number = 0;

    const saveData = async () => {
        const db = database;
        // const newDocRef = push(ref(db, "products")); set(newDocRef, {
        //     product
        // })
        set(ref(db, "products/" + number), {
            product,
        })
            .then(() => {
                alert("data saved successfully");
            })
            .catch((error) => {
                console.log(error, "ups error");
            });
    };

    const changeOrder = async () => {
        // fetchData();
        dispatch(clearProduct());
        setOrder(true);
        // saveData();
    };

    const changesOrder = () => {
        setOrder(false);
        closeModal();
    };

    return (
        <div className={modal ? "modal active" : "modal"}>
            <div className="modal__wrapper">
                <div className="modal__header">
                    <h1 className="modal__title">Корзина</h1>
                    <div onClick={closeModal}>
                        <GlobalSvgIcons id="close" />
                    </div>
                </div>
                {order ? (
                    <div className="modal__list">
                        <img src={list} alt="" />
                        <h1>Заказ оформлен!</h1>
                        <p>
                            Ваш заказ #18 скоро будет передан{" "}
                            <span>курьерской доставке</span>
                        </p>
                        <button onClick={changesOrder}>Вернуться назад</button>
                    </div>
                ) : product.length ? (
                    <div className="modal__content">
                        <div className="modal__content-product">
                            {product.map((product) => (
                                <div key={product.id} className="product">
                                    <img src={product.image} alt="" />
                                    <div className="product__text">
                                        <p>{product.name}</p>
                                        <h3>{product.price} руб.</h3>
                                    </div>
                                    <div
                                        onClick={() =>
                                            deleteProduct(product.id)
                                        }
                                        className="product__icon"
                                    >
                                        <GlobalSvgIcons id="delete" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="modal__content-footer">
                            <div className="total">
                                <p>Итого:</p>
                                <div></div>
                                <h3>{totalPrice} руб.</h3>
                            </div>
                            <div className="tax">
                                <p>Налог 5%:</p>
                                <div></div>
                                <h3>{totalTax} руб.</h3>
                            </div>
                            <button onClick={changeOrder}>
                                Оформить заказ{" "}
                                <div>
                                    {" "}
                                    <GlobalSvgIcons id="right" />
                                </div>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="modal__cart">
                        <img src={box} alt="" />
                        <h1>Корзина пустая</h1>
                        <p>
                            Добавьте хотя бы одну пару{" "}
                            <span>кроссовок, чтобы сделать заказ.</span>
                        </p>
                        <button onClick={closeModal}>Вернуться назад</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
