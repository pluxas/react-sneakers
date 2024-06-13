import { configureStore } from "@reduxjs/toolkit";
import { changed } from "../slice/stateSlice";
import { cart } from "../slice/productSlice";
import { api } from "../slice/apiSlice";

export const store = configureStore({
    reducer: {
        change: changed,
        cart: cart,
        apiSlice: api
    },
    devTools: true,
})