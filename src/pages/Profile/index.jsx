import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../components/slice/useUser";
import { useAuth } from "../../hooks/use-auth";
import HomePage from "../Authorization/AuthorizationPage";
import "./Profile.scss";
import { NavLink } from "react-router-dom";
import {
    Database,
    child,
    get,
    getDatabase,
    push,
    ref,
    set,
    update,
} from "firebase/database";
import app from "../../firebase";
import { myProducts } from "../../components/slice/productSlice";
import { Form } from "./form";

const Profile = () => {
    const myProduct = useSelector((state) => state.cart.myProducts);
    const product = useSelector((state) => state.cart.product);
    const dispatch = useDispatch();
    const { isAuth } = useAuth();

    const writeNewPost = (productName) => {
        const db = getDatabase();

        const postData = {
            name: productName,
        };

        const newPostKey = push(child(ref(db), "products")).key;

        const updates = {};
        updates["/products/" + newPostKey] = postData;
        updates["/user-products/" + newPostKey] = postData;

        return update(ref(db), updates);
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const db = getDatabase(app)
    //         const deRef = ref(db, 'products')
    //         const snapshot = await get(deRef)
    //         if (snapshot.exists()) {
    //             const targetObject = snapshot.val()
    //             setData(targetObject.name)
    //         } else {
    //             alert('error')
    //         }
    //     }
    //     fetchData()
    // }, [])

    // const name = product.map(product => product.name)
    // const image = product.map(product => product.image)
    // const id = product.map(product => product.id)

    // const saveData = async (productId) => {
    //     const db = getDatabase(app)
    //     const newDocRef = push(ref(db, 'products' + ))
    //     set(newDocRef, {
    //         name,
    //         image,
    //         id
    //     }).then(() => {
            // console.log('data saved successfully')
    //     }).catch((error) => {
    //         console.log(error, 'ups error');
    //     })
    // }

    // return isAuth ? (
    return (
        <div className="admin">
            <button
                className="button_log_out"
                onClick={() => dispatch(logout())}
            >
                Log out
            </button>
            <div className="admin__block">
                <header className="admin__header">
                    <h1>image</h1>
                    <h1>name</h1>
                    <h1>id</h1>
                    <div></div>
                </header>
                <main className="admin__products">
                    {/* {myProduct.map((product) => {
                        console.log(product);
                        return (
                            <div key={product.id}>
                                <div className="admin__products-product">
                                    <img src={product.image} alt="" />
                                    <h1 className="name">{product.name}</h1>
                                    <h1 className="id">{product.id}</h1>
                                </div>

                                {product ? <Form product={product} /> : null}
                            </div>
                        );
                    })} */}
                    {myProduct.map(product => {
                        
                    })}
                </main>
            </div>
        </div>
    );
    // ) : (
    //     <HomePage />
    // );
};

export default Profile;