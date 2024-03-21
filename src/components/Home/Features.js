import dictionary from '../../assets/home/dictionary.png'
import quran from '../../assets/home/quran.png'
import pray from '../../assets/home/pray.png'
import { useNavigate } from 'react-router-dom';

export default function Features() {
    const data = [
        {source: quran, title: "Belajar Al-Qur'an Isyarat", desc: 'Didukung dengan bahasa isyarat tangan', path: '/app/belajar'},
        {source: dictionary, title: 'Ilmu Pengetahuan Islam', desc: 'Menjelaskan maksud dari istilah-istilah Islam yang ada', path: '/app/ilmu'},
        {source: pray, title: 'Zikir harian', desc: 'Nikmati beragam doa dzikir yang menyegarkan jiwa dan mendekatkan pada Allah', path: '/app/zikir'}
    ]
    // const data = [
    //     {source: quran, title: 'Belajar Al-Quran', desc: 'Didukung dengan bahasa isyarat tangan'},
    //     {source: dictionary, title: 'Kamus Islam', desc: 'Menjelaskan maksud dari istilah-istilah Islam yang ada'},
    //     {source: pray, title: 'Doa Dzikir', desc: 'Nikmati beragam doa dzikir yang menyegarkan jiwa dan mendekatkan pada Allah'}
    // ]
    return (
        <div className="flex flex-col gap-2 p-2 items-center">
            <div className="flex flex-col gap-2 max-w-[80rem] w-full shadow">
                {data.map((item, i) => <MenuIcon item={item} key={i}/>)}
            </div>
        </div>
    );
}

function MenuIcon({item}) {
    const navigate = useNavigate()
    return <div className="flex flex-col gap-2 items-center justify-center bg-base-100 w-full flex-1 border-2 border-base-200 shadow p-4 cursor-pointer hover:bg-base-200" onClick={() => navigate(item.path)}>
        <figure className="flex-1">
            <img
                src={item.source}
                alt="Shoes"
                className="h-8"
                loading='lazy'
            />
        </figure>
        <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-[.6em] font-semibold">{item.title}</p>
        </div>
    </div>
}