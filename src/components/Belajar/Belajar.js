import { Route, Routes, useNavigate } from 'react-router-dom'
import hijaiyahImage from '../../assets/belajar/IsyaratHijaiyah.png'

export default function Belajar() {
    return <div className="flex flex-col gap-2 p-2 text-sm">
        <Routes>
            <Route index Component={MenuBelajar}/>
            <Route path='pengenalan' Component={Pengenalan}/>
        </Routes>
    </div>
}

function MenuBelajar() {
    const navigate = useNavigate()
    return <div className='flex flex-col gap-6'>
        <p className='font-semibold text-xl text-center'>Belajar Al-Quran Isyarat</p>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2 items-center justify-center w-full flex-1 shadow p-4 cursor-pointer btn btn-neutral' onClick={() => navigate('/app/belajar/pengenalan')}>
                Mengenal Huruf Hijaiyah Berisyarat
            </div>
            <div className='flex flex-col gap-2 items-center justify-center w-full flex-1 shadow p-4 cursor-pointer btn btn-neutral'>
                Level 1
            </div>
            <div className='flex flex-col gap-2 items-center justify-center w-full flex-1 shadow p-4 cursor-pointer btn btn-neutral'>
                Level 2
            </div>
            <div className='flex flex-col gap-2 items-center justify-center w-full flex-1 shadow p-4 cursor-pointer btn btn-neutral'>
                Level 3
            </div>
        </div>
    </div>
}

function Pengenalan() {
    return <div className='flex flex-col gap-2'>
        <p>Pengenalan Al-Quran bahasa isyarat</p>
        <div className="max-w-md shadow rounded overflow-hidden">
            <img src={hijaiyahImage} alt="Hijaiyah bahasa isyarat" />
        </div>
    </div>
}