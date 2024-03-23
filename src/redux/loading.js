import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    fetchPrayer: false
}

export const slice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setFetchPrayer: (state, action) => {
            state.fetchPrayer = action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { setFetchPrayer } = slice.actions;

export default slice.reducer;
