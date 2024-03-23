import axios from "axios"
import CryptoJS from "crypto-js"
import momentHijri from 'moment-hijri'
import { store } from "./redux/store"
import { setFetchPrayer } from "./redux/loading"

// variable
export const API = process.env.REACT_APP_API
export const namaBulanHijriah = [
    'Muharram', 'Safar', 'Rabiul Awal', 'Rabiul Akhir',
    'Jumadil Awal', 'Jumadil Akhir', 'Rajab', 'Syaban',
    'Ramadhan', 'Syawal', 'Dzulqaidah', 'Dzulhijjah'
]

// utils
export const fetchPrayerTimes = async () => {
    store.dispatch(setFetchPrayer(true))
    const data = await axios.get('https://api.aladhan.com/v1/timingsByCity?city=magelang&country=indonesia&method=2')
    .then(res => {
        return res.data.data
    }).catch(err => {
        throw new Error(err)
    }).finally(() => {
        store.dispatch(setFetchPrayer(false))
    })
    return data
}

export function formatDateToLocaleString(date) {
    const mh = momentHijri(date)
    const namaBulan = namaBulanHijriah[mh.iMonth()]
    const tanggalHijriah = mh.iDate()
    const tahunHijriah = mh.iYear()

    let hijr = `${tanggalHijriah} ${namaBulan} ${tahunHijriah} H`
    let masehi = `${new Date(date).getDate()} ${new Date(date).toLocaleDateString('id', {month: 'long'})} ${new Date(date).getFullYear()}`
    return {hijr, masehi}
}

// crypto
function encryptObject(object) {
    const jsonString = JSON.stringify(object)

    const encryptedMessage = CryptoJS.AES.encrypt(jsonString, process.env.REACT_APP_CRYPTO_KEY).toString()
    return encryptedMessage
}

function dencryptObject(encryptedMessage) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, process.env.REACT_APP_CRYPTO_KEY)
    const decryptedJsonString = decryptedBytes.toString(CryptoJS.enc.Utf8)

    const decryptedObject = JSON.parse(decryptedJsonString)

    return decryptedObject
}

export function setLocalStorage(key, string) {
    localStorage.setItem(key, string)
}

export function getLocalStorage(key) {
    const dataString = localStorage.getItem(key)

    if (dataString) {
        return dataString
    } else {
        return null
    }
}
export function setObjectLocalStorage(key, data) {
    const dataString = JSON.stringify(data)
    localStorage.setItem(key, dataString)
}

export function getObjectLocalStorage(key) {
    try {
        const dataString = localStorage.getItem(key)
    
        if (dataString) {
            const data = JSON.parse(dataString)
            return data
        } else {
            return null
        }
    } catch (error) {
        console.log(error);
    }
}

export function setEncryptObjectLocalStorage(key, data) {
    const dataString = encryptObject(data)
    localStorage.setItem(key, dataString)
}

export function getDecryptObjectLocalStorage(key) {
    try {
        const dataString = localStorage.getItem(key)
        
        if (dataString) {
            const data = dencryptObject(dataString)
            return data
        } else {
            return null
        }
    } catch (error) {
        localStorage.removeItem(key)
    }
}