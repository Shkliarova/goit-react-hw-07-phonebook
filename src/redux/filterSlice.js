import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: ""
    },
    reducers: {
        updateFilter(state, action) {
            state.filter = action.payload;
        }
    }
})

export const filterReducer = filterSlice.reducer;
export const {updateFilter} = filterSlice.actions;