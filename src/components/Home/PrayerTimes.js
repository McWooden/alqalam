export default function PrayerTimes() {
    return <div className="stats shadow flex flex-row flex-wrap bg-transparent text-light text-shadow">
    <div className="stat w-fit text-light">
        <div className="stat-title text-light text-shadow">Subuh</div>
        {/* <div className="stat-value">31K</div> */}
        <div className="stat-desc text-light text-shadow">Jan 1st - Feb 1st</div>
    </div>
    
    <div className="stat w-fit">
        <div className="stat-title text-light text-shadow">Dzuhur</div>
        {/* <div className="stat-value">4,200</div> */}
        <div className="stat-desc text-light text-shadow">↗︎ 400 (22%)</div>
    </div>

    <div className="stat w-fit">
        <div className="stat-title text-light text-shadow">Ashar</div>
        {/* <div className="stat-value">4,200</div> */}
        <div className="stat-desc text-light text-shadow">↗︎ 400 (22%)</div>
    </div>

    <div className="stat w-fit">
        <div className="stat-title text-light text-shadow">Maghrib</div>
        {/* <div className="stat-value">4,200</div> */}
        <div className="stat-desc text-light text-shadow">↗︎ 400 (22%)</div>
    </div>
    
    <div className="stat w-fit">
        <div className="stat-title text-light text-shadow">Isya</div>
        {/* <div className="stat-value">1,200</div> */}
        <div className="stat-desc text-light text-shadow">↘︎ 90 (14%)</div>
    </div>
</div>
}