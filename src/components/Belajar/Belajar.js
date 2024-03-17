import { Route, Routes } from 'react-router-dom'
import hijaiyahImage from '../../assets/belajar/IsyaratHijaiyah.png'
import { Menu } from '../Utils'
import ErrorPage from '../ErrorPage'

export default function Belajar() {
    return <div className="flex flex-col gap-2 p-2 text-sm">
        <Routes>
            <Route index Component={MenuBelajar}/>
            <Route path='pengenalan' Component={Pengenalan}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
}

function MenuBelajar() {
    const menuList = [
        {title: 'Mengenal Huruf Hijaiyah Berisyarat', path: '/app/belajar/pengenalan'},
        {title: 'Level 1', path: '/'},
        {title: 'Level 2', path: '/'},
        {title: 'Level 3', path: '/'},
    ]

    return <Menu title='Belajar Al-Quran Isyarat' items={menuList}/>
}

function Pengenalan() {
    return <div className='flex flex-col gap-2'>
        <p>Pengenalan Al-Quran bahasa isyarat</p>
        <div className="max-w-md shadow rounded overflow-hidden">
            <img src={hijaiyahImage} alt="Hijaiyah bahasa isyarat" />
        </div>
    </div>
}