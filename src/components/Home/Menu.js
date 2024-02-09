import dictionary from '../../assets/dictionary.png'
import quran from '../../assets/quran.png'

export default function Menu() {
    const data = [
        {source: quran, title: 'Belajar Al-Quran', desc: 'Didukung dengan bahasa isyarat tangan'},
        {source: dictionary, title: 'Kamus Islam', desc: 'Menjelaskan maksud dari istilah-istilah Islam yang ada'}
    ]
    return (
        <div className="flex flex-col md:flex-row gap-2 p-2">
            {data.map((item, i) => <div className="card bg-base-100 shadow-xl border-2 border-base-200 w-fit flex-1" key={i}>
                <figure className="px-10 pt-10">
                    <img
                        src={item.source}
                        alt="Shoes"
                        className="w-20"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.desc}</p>
                </div>
            </div>)}
        </div>
    );
}
