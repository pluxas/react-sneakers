import { createSlice } from "@reduxjs/toolkit";
import { getFavorites, getProduct, getTodos } from "../localStorage";

const initialState = {
  product: (getTodos()),
  isLoading: false,
  myProducts: (getProduct()),
  favoriteProducts: (getFavorites()),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, {payload}) => {
            state.product.push(payload)
            state.isLoading = true
        },
        removeProduct: (state, {payload}) => {
            state.product = state.product.filter(product => product.id !== payload)
        },
        myProducts: (state) => {
            state.myProducts = state.product
        },
        clearProduct: (state) => {
            state.product = []
            state.isLoading = false
        },
        addFavoriteProducts: (state, {payload}) => {
            state.favoriteProducts.push(payload)
        }
    }
})

export const {addProduct, removeProduct, myProducts, clearProduct, addFavoriteProducts} = cartSlice.actions
export const cart = cartSlice.reducer   