// import { useState, useEffect } from "react";
// import axios from "axios";
import heroimg from '../../assets/herobg.webp'
import PrayerTimes from "./PrayerTimes";

export default function Hero() {
    return <>
    <div className="hero bg-faded" style={{backgroundImage: `url(${heroimg})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content w-full flex flex-col gap-2">
            <div className="w-full">
                <h1 className="text-5xl font-bold text-shadow">Al-Qalam</h1>
                <p className="mb-5 text-shadow">Al-Quran Isyarat dan Ilmu Pengetahuan Islam.</p>
            </div>
            <PrayerTimes/>
        </div>
    </div>
    </>
}

// // Define the city and country constants
// const CITY = "Magelang";
// const COUNTRY = "Indonesia";

// // Define a custom hook to fetch data from the API
// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch the data from the API using Axios
//     axios.get(url)
//       .then((response) => {
//         // Check if the response is ok
//         if (response.status === 200) {
//           // Set the data state
//           setData(response.data);
//         } else {
//           // Throw an error with the status text
//           throw new Error(response.statusText);
//         }
//       })
//       .catch((error) => {
//         // Set the error state
//         setError(error);
//       })
//       .finally(() => {
//         // Set the loading state to false
//         setLoading(false);
//       });
//   }, [url]);

//   // Return the data, loading, and error states
//   return { data, loading, error };
// };

// // Define a component to display the prayer times
// const PrayerTimes = () => {
//   // Define the API URL with the city and country parameters
//   const API_URL = `http://api.aladhan.com/v1/timingsByCity?city=$magelang&country=indonesia&method=2`;

//   // Use the custom hook to fetch the data from the API
//   const { data, loading, error } = useFetch(API_URL);

//   // Render the component
//   return (
//     <div className="prayer-times">
//       <h1>Prayer Times for {CITY}, {COUNTRY}</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {data && (
//         <table>
//           <thead>
//             <tr>
//               <th>Prayer</th>
//               <th>Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(data.data.timings).map(([key, value]) => (
//               <tr key={key}>
//                 <td>{key}</td>
//                 <td>{value}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

