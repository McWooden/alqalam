import { Route, Routes } from "react-router-dom"
import { Menu } from "../Utils"
import ErrorPage from "../ErrorPage"
import Akidah, { RukunIman } from "./Akidah"
import EmpetyPage from "../empetyPage"

export default function Ilmu() {
    return <div className="flex flex-col gap-2 p-2 text-sm items-center">
        <Routes>
            <Route index Component={MenuIlmu}/>
            <Route path="akidah">
                <Route index Component={Akidah}/>
                <Route path="rukun-iman" Component={RukunIman}/>
            </Route>
            <Route path='Akhlak' Component={EmpetyPage}/>
            <Route path='ibadah' Component={EmpetyPage}/>
            <Route path='tarikh' Component={EmpetyPage}/>
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