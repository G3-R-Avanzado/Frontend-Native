import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: null,
        username: null,
        email: null,
        rol: null,
        id: null,
        picture: null,
        createdAt: null,
        updateAt: null
    },
    isLogged: false,
    message: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.isLogged = true,
            state.message = {
                type: "success",
                text: "Iniciaste sesión"
            }
        },
        logout: (state) => {
            state.user = {
                name: null,
                username: null,
                email: null,
                rol: null,
                id: null,
                createdAt: null,
                updateAt: null
            },
            state.isLogged = false,
            state.message = null;
        },
        update: (state, action)=> {
            state.user = {
                id: action.payload.user.id,
                name: action.payload.user.name,
                username: action.payload.user.username,
                email: action.payload.user.email,
                picture: action.payload.user.picture,
                createdAt: action.payload.user.createdAt,
                updateAt: action.payload.user.updateAt
            }
        },
        messageError: (state, action) => {
            state.message = {
                type: "error",
                text: action.payload.message
            }
        }
    }
});

export const { login, logout, messageError, update } = authSlice.actions;