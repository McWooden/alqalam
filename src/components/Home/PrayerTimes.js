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

    return <div className="stats w-full flex flex-row flex-wrap bg-transparent text-light text-shadow justify-evenly overflow-x-visible py-8">
        {data.filter(time => isPastTime(prayerTimes?.timings?.[time.key])).map((time, i) => <PrayerStat time={time} timing={prayerTimes?.timings?.[time.key]} key={i}/>)}
        {data.filter(time => !isPastTime(prayerTimes?.timings?.[time.key])).map((time, i) => <PrayerStat time={time} timing={prayerTimes?.timings?.[time.key]} highLight={!i} key={i + 'random'} active={true}/>)}
    </div>
}

function PrayerStat({time, className = '', highLight = false, active = false, timing}) {

    return <div className={`stat w-fit text-center basis-1/5 grow rounded items-center ${className} ${highLight ? 'bg-neutral scale-110 shadow-sm' : active ? 'bg-neutral/25 shadow' : 'opacity-75 text-light'}`} key={time.nama}>
        <div className="stat-title text-light text-shadow">{time.nama}</div>
        <div className="stat-desc text-light text-shadow">{timing  || '--:--'}</div>
        {highLight && <MyCountDown timing={timing}/>}
    </div>
}

function MyCountDown({ timing = '23:59' }) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetTime = new Date();
            const [targetHours, targetMinutes] = timing.split(':').map(num => parseInt(num));
            targetTime.setHours(targetHours, targetMinutes, 0, 0);

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
        <span className="countdown font-mono text-2xl text-center">
            <span style={{ "--value": hours }}>{hours}</span>:
            <span style={{ "--value": minutes }}>{minutes}</span>:
            <span style={{ "--value": seconds }}>{seconds}</span>
        </span>
    );
}

