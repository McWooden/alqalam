import dictionary from '../../assets/dictionary.png'
import quran from '../../assets/quran.png'
import pray from '../../assets/pray.png'

export default function Menu() {
    const data = [
        {source: quran, title: 'Belajar Al-Quran', desc: 'Didukung dengan bahasa isyarat tangan'},
        {source: dictionary, title: 'Kamus Islam', desc: 'Menjelaskan maksud dari istilah-istilah Islam yang ada'},
        {source: pray, title: 'Doa Dzikir', desc: 'Nikmati beragam doa dzikir yang menyegarkan jiwa dan mendekatkan pada Allah'}
    ]
    return (
        <div className="flex flex-col md:flex-row gap-2 p-2">
            {data.map((item, i) => <div className="flex flex-col gap-2 items-center justify-center bg-base-100 shadow-xl border-2 border-base-200 w-fit flex-1 p-5" key={i}>
                <figure className="">
                    <img
                        src={item.source}
                        alt="Shoes"
                        className="w-20"
                    />
                </figure>
                <div className="flex flex-col gap-2 items-center text-center">
                    <h2 className="font-bold">{item.title}</h2>
                    <p>{item.desc}</p>
                </div>
            </div>)}
        </div>
    );
}
