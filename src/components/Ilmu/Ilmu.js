import { Route, Routes } from "react-router-dom"
import { Menu } from "../Utils"
import ErrorPage from "../ErrorPage"
import Akidah, { RukunIman } from "./Akidah"

export default function Ilmu() {
    return <div className="flex flex-col gap-2 p-2 text-sm">
        <Routes>
            <Route index Component={MenuIlmu}/>
            <Route path="akidah">
                <Route index Component={Akidah}/>
                <Route path="rukunIman" Component={RukunIman}/>
            </Route>
            <Route path='Akhlak' Component={Akidah}/>
            <Route path='ibadah' Component={Akidah}/>
            <Route path='tarikh' Component={Akidah}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
}

function MenuIlmu() {
    const menuList = [
        {title: 'Akidah', path: '/app/ilmu/akidah'},
        {title: 'Akhlak', path: '/app/ilmu/akhlak'},
        {title: 'Ibadah', path: '/app/ilmu/ibadah'},
        {title: 'Tarikh', path: '/app/ilmu/tarikh'},
    ]
    return <Menu title='Beragam Ilmu Pengetahuan Islam' items={menuList}/>
}