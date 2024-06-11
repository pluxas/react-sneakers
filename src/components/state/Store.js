import { configureStore } from "@reduxjs/toolkit";
import { changed } from "../slice/stateSlice";
import { cart } from "../slice/productSlice";

export const store = configureStore({
    reducer: {
        change: changed,
        cart: cart
    },
    devTools: true,
})