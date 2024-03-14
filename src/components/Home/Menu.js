import dictionary from '../../assets/dictionary.png'
import quran from '../../assets/quran.png'
import pray from '../../assets/pray.png'

export default function Menu() {
    const data = [
        {source: quran, title: 'Belajar Al-Quran', desc: 'Didukung dengan bahasa isyarat tangan'},
        {source: dictionary, title: 'Kamus Islam', desc: 'Menjelaskan maksud dari istilah-istilah Islam yang ada'},
        {source: pray, title: 'Doa Dzikir', desc: 'Nikmati beragam doa dzikir yang menyegarkan jiwa dan mendekatkan pada Allah'}
    ]
    // const data = [
    //     {source: quran, title: 'Belajar Al-Quran', desc: 'Didukung dengan bahasa isyarat tangan'},
    //     {source: dictionary, title: 'Kamus Islam', desc: 'Menjelaskan maksud dari istilah-istilah Islam yang ada'},
    //     {source: pray, title: 'Doa Dzikir', desc: 'Nikmati beragam doa dzikir yang menyegarkan jiwa dan mendekatkan pada Allah'}
    // ]
    return (
        <div className="flex flex-col gap-2 p-2 items-center">
            <div className="flex gap-2 max-w-md w-full shadow border-2 border-base-200">
                {data.map((item, i) => <MenuIcon item={item} key={i}/>)}
            </div>
        </div>
    );
}

function MenuIcon({item}) {
    return <div className="flex flex-col gap-2 items-center justify-center bg-base-100 w-fit flex-1">
        <figure className="bg-neutral shadow p-2 rounded-full flex-1">
            <img
                src={item.source}
                alt="Shoes"
                className="w-8"
            />
        </figure>
        <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-[.6em] font-semibold">{item.title}</p>
        </div>
    </div>
}