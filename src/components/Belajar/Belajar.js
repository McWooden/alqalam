import hijaiyahImage from '../../assets/belajar/IsyaratHijaiyah.png'

export default function Belajar() {
    return <div className="flex flex-col gap-2 p-2 text-sm">
        <p>Belajar Al-Quran didukung dengan bahasa isyarat tangan</p>
        <div className="max-w-md shadow rounded overflow-hidden">
            <img src={hijaiyahImage} alt="Hijaiyah bahasa isyarat" />
        </div>
    </div>
}