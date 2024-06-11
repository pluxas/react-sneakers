import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: false,
};

const changeState = createSlice({
    name: 'changeState',
    initialState,
    reducers: {
        trueState: (state) => {
            state.state = true;
        },
        falseState: (state) => {
            state.state = false;
        }
    }
})

export const { trueState, falseState } = changeState.actions;
export const changed = changeState.reducer