import { createSlice } from "@reduxjs/toolkit";
import { getDecryptObjectLocalStorage, setEncryptObjectLocalStorage } from "../utils";

let local = getDecryptObjectLocalStorage('prayerTimes')
if (local?.period !== new Date().toLocaleDateString()) local = null

const initialState = {
    data: local?.data || null,
    period: local?.period || null,
};

export const prayerTimes = createSlice({
    name: "prayerTimes",
    initialState,
    reducers: {
        setPrayerTimes: (state, action) => {
            state.period = new Date().toLocaleDateString()
            state.data = action.payload;
            setEncryptObjectLocalStorage('prayerTimes',{period: state.period, data: state.data})
        },
    },
});

// Action creators are generated for each case reducer function
export const { setPrayerTimes } = prayerTimes.actions;

export default prayerTimes.reducer;
