import { createSlice } from "@reduxjs/toolkit";

/* const initialState = {
    user: {
        username: "Agustin",
        email: "asdasdasd@gmail.com",
        rol: "Admin",
        id: 51561651,
        createdAt: "dasdasd",
        updateAt: "sadadasd"
    },
    isLogged: true,
    token: "sdfsdfsdf",
    message: null
}   */

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