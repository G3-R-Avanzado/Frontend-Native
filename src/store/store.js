import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Slices/auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})