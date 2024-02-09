import { configureStore } from '@reduxjs/toolkit'
import prayerTimes from './prayerTimes'

export const store = configureStore({
    reducer: {
        prayerTimes: prayerTimes
    },
})