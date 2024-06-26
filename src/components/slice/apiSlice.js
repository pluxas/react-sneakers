import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'api/fetchData',
    async () => {
        
        const comments = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')

        const data = await comments.json()
        return data 
    }
)

const initialState = {
    data: [],
    status: null,
    error: null,
}

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state, {payload}) => {
                state.status = 'secceeded'
                state.data = payload
            })
            .addCase(fetchData.rejected, (state, {error}) => {
                state.status = 'error'
                state.error = error.massage
            })
    }
})

export const api = apiSlice.reducer