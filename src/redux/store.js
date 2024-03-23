import { configureStore } from '@reduxjs/toolkit'
import prayerTimes from './prayerTimes'
import loading from './loading'

export const store = configureStore({
    reducer: {
        prayerTimes: prayerTimes,
        loading: loading
    },
})