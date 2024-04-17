import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    user: null
}

export const authSlice = createSlice({
    name: 'carry',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.products.push(action.payload.product)
            state.user = action.payload.user
        }
    }
});

export const {
    add
} = authSlice.actions;