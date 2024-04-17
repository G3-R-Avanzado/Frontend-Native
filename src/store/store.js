import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Slices/auth/authSlice";
import { publicationSlice } from "./Slices/publication/publicationSlice";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        publication: publicationSlice.reducer
    }
})