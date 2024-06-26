import { configureStore } from "@reduxjs/toolkit";
import { changed } from "../components/slice/stateSlice";
import { cart } from "../components/slice/productSlice";
import { api } from "../components/slice/apiSlice";
import { user } from "../components/slice/useUser";

export const store = configureStore({
    reducer: {
        change: changed,
        cart: cart,
        apiSlice: api,
        user,
    },
    devTools: true,
})