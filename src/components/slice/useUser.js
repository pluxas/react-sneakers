import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.email = payload.email
            state.token = payload.token
            state.id = payload.id
        },
        logout: (state) => {
            state.email = null
            state.token = null
            state.id = null
        }
    }
})

export const { login, logout} = userSlice.actions
export const user = userSlice.reducer