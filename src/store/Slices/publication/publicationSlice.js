import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    publications: [],
    publicationsUser: []
}

export const publicationSlice = createSlice({
    name: 'publication',
    initialState: initialState,
    reducers: {
        updateAll: (state, action) => {
            state.publications = action.payload.publications
        }, 
        updateAllUser: (state, action) => {
            state.publicationsUser = action.payload.publicationsUser
        }, 
    }
});

export const { updateAll, updateAllUser } = publicationSlice.actions;