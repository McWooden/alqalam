import { Route, Routes } from 'react-router-dom'
import hijaiyahImage from '../../assets/belajar/IsyaratHijaiyah.png'
import { Menu } from '../Utils'
import ErrorPage from '../ErrorPage'
import EmpetyPage from '../empetyPage'

export default function Belajar() {
    return <div className="flex flex-col gap-2 p-2 text-sm items-center">
        <Routes>
            <Route index Component={MenuBelajar}/>
            <Route path='pengenalan' Component={Pengenalan}/>
            <Route path='tingkat-1' Component={EmpetyPage}/>
            <Route path='tingkat-2' Component={EmpetyPage}/>
            <Route path='tingkat-3' Component={EmpetyPage}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
}

function MenuBelajar() {
    const menuList = [
        {title: 'Mengenal Huruf Hijaiyah isyarat', path: '/app/belajar/pengenalan'},
        {title: 'Tingkat 1', path: '/app/belajar/tingkat-1'},
        {title: 'Tingkat 2', path: '/app/belajar/tingkat-2'},
        {title: 'Tingkat 3', path: '/app/belajar/tingkat-3'},
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