import axios from "axios"
import { useEffect, useState } from "react"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPrayerTimes } from "../../redux/prayerTimes"

export default function PrayerTimes() {
    const prayerTimes = useSelector(state => state.prayerTimes.data)

    const dispatch = useDispatch()

    const data = [
        {nama: 'Subuh', key: 'Fajr'},
        {nama: 'Dzuhur', key: 'Dhuhr'},
        {nama: 'Ashar', key: 'Asr'},
        {nama: 'Maghrib', key: 'Maghrib'},
        {nama: 'Isya', key: 'Isha'},
    ]

    const fetchData = useCallback(async () => {
        try {
            await axios.get('https://api.aladhan.com/v1/timingsByCity?city=magelang&country=indonesia&method=2')
            .then(res => {
                console.log(res.data.data);
                dispatch(setPrayerTimes(res.data.data))
            }).catch(err => {
                throw new Error(err)
            })
        } catch (error) {
            console.log(error)
        }
    },[dispatch])

    const getCurrentTimeInMinutes = () => {
        const now = new Date();
        return now.getHours() * 60 + now.getMinutes();
    }
    
    const isPastTime = (prayerTime) => {
        if (!prayerTime) return null
        const currentTimeInMinutes = getCurrentTimeInMinutes();
        const [hours, minutes] = prayerTime.split(':').map(Number);
        const prayerTimeInMinutes = hours * 60 + minutes;
        return currentTimeInMinutes > prayerTimeInMinutes;
    }
    


    useEffect(() => {
        if (!prayerTimes) fetchData()
    },[fetchData, prayerTimes])

    return <>
        <label htmlFor="my_modal_7" className="stats w-full flex flex-row flex-wrap bg-transparent text-light text-shadow justify-evenly overflow-x-visible py-2">
            {data.filter(time => isPastTime(prayerTimes?.timings?.[time.key])).map((time, i) => <PrayerStat time={time} timing={prayerTimes?.timings?.[time.key]} key={i}/>)}
            {data.filter(time => !isPastTime(prayerTimes?.timings?.[time.key])).map((time, i) => <PrayerStat time={time} timing={prayerTimes?.timings?.[time.key]} highLight={!i} key={i + 'random'} active={true}/>)}
        </label>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal z-[1]" role="dialog">
            <div className="modal-box flex flex-col gap-2 text-base-content">
                <div className="flex flex-col">
                    <h3 className="text-bold text-2xl">Waktu ibadah</h3>
                    <p>Menunjukkan waktu ibadah dan acara pada hari ini</p>
                </div>
                <div className="flex-1 overflow-auto shadow">
                    <PrayersList/>
                </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
    </>
}

function PrayerStat({time, className = '', highLight = false, active = false, timing}) {
    return <div className={`relative stat flex flex-col items-center w-fit text-center basis-1/5 grow rounded ${className} ${highLight ? 'scale-110 shadow-sm' : active ? '' : 'opacity-75'} p-2`} key={time.nama}>
        <div className="stat-title text-shadow text-light text-sm">{time.nama}</div>
        <div className={`stat-desc text-shadow text-light ${highLight ? 'font-semibold text-lg' : 'text-xs'}`}>{timing  || '--:--'}</div>
        {highLight && <MyCountDown timing={timing} className={'absolute -bottom-1 opacity-90'}/>}
    </div>
}

function PrayersList() {
    const prayerTimes = useSelector(state => state.prayerTimes.data)

    const data = [
        {nama: 'Sepertiga terakhir', key: 'Lastthird'},
        {nama: 'Imsak', key: 'Imsak'},
        {nama: 'Subuh', key: 'Fajr'},
        {nama: 'Matahari terbit', key: 'Sunrise'},
        {nama: 'Dzuhur', key: 'Dhuhr'},
        {nama: 'Ashar', key: 'Asr'},
        {nama: 'Matahari tenggelam', key: 'Sunset'},
        {nama: 'Maghrib', key: 'Maghrib'},
        {nama: 'Isya', key: 'Isha'},
        {nama: 'Sepertiga pertama', key: 'Firstthird'},
        {nama: 'Tengah malam', key: 'Midnight'},
    ]

    return <div className="bg-base-100 text-base-content p-4 rounded shadow max-w-md">
        <div className="w-full flex flex-col text-shadow">
            {data?.reverse().map((time, i) => <PrayerList time={time} timing={prayerTimes?.timings?.[time.key]} key={i + 'random'}/>) || ''}
        </div>
    </div>
}

function PrayerList({time, className = '', timing}) {
    return <div className={`relative flex items-center w-full ${className} p-2`} key={time.nama}>
        <div className="flex flex-col flex-1">
            <div className="text-shadow font-medium text-lg">{time.nama}</div>
            <div className="text-shadow text-sm">{timing  || '--:--'}</div>
        </div>
        <MyCountDown timing={timing} className="bg-secondary text-secondary-content p-2"/>
    </div>
}

function MyCountDown({ timing = '23:59', className = ''}) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const targetTime = new Date();
        const [targetHours, targetMinutes] = timing.split(':').map(num => parseInt(num));
        targetTime.setHours(targetHours, targetMinutes, 0, 0);
        const calculateTimeLeft = () => {
            const now = new Date();
            let difference = targetTime - now;
            if (difference < 0) {
                difference = 0;
            }

            const hoursLeft = Math.floor(difference / (1000 * 60 * 60));
            const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

            setHours(hoursLeft);
            setMinutes(minutesLeft);
            setSeconds(secondsLeft);
        };

        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [timing]);

    return (
        <span className={`countdown font-mono text-center rounded shadow text-xs ${className}`}>
            <span style={{ "--value": hours }}>{hours}</span>:
            <span style={{ "--value": minutes }}>{minutes}</span>:
            <span style={{ "--value": seconds }}>{seconds}</span>
        </span>
    );
}

