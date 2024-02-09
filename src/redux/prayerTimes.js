import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    period: null,
};

export const prayerTimes = createSlice({
    name: "prayerTimes",
    initialState,
    reducers: {
        setPrayerTimes: (state, action) => {
            state.period = new Date().toLocaleDateString();
            state.data = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setPrayerTimes } = prayerTimes.actions;

export default prayerTimes.reducer;
