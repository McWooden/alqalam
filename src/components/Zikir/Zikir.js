import { Route, Routes } from "react-router-dom"
import ErrorPage from "../ErrorPage"
import { Menu } from "../Utils"
import MyMarkdown from "../MyMarkdown"

export default function Zikir() {
    return <div className="flex h-full flex-col gap-2 p-2 text-sm">
        <Routes>
            <Route index Component={MenuZikir}/>
            <Route path="takbir" Component={Takbir}/>
            <Route path="tahmid" Component={Tahmid}/>
            <Route path="tahlil" Component={Tahlil}/>
            <Route path="tasbih" Component={Tasbih}/>
            <Route path="istighfar" Component={Istighfar}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
}

function MenuZikir() {
    const menuList = [
        {title: 'Takbir', path: '/app/zikir/takbir'},
        {title: 'Tahmid', path: '/app/zikir/tahmid'},
        {title: 'Tahlil', path: '/app/zikir/tahlil'},
        {title: 'Tasbih', path: '/app/zikir/tasbih'},
        {title: 'Istighfar', path: '/app/zikir/istighfar'},
    ]

    return <Menu title='Zikir Harian' items={menuList}/>
}

function Takbir() {
    const myContent = `
# اللَّهُ أَكْبَرُ
Allahu Akbar  
Allah Maha Besar

***  

Takbir diucapkan dalam berbagai konteks, termasuk saat merayakan hari raya seperti Idul Fitri dan Idul Adha, serta ketika berada di tempat-tempat suci.
    `
    return <div className="bg-neutral text-neutral-content p-2 rounded text-center mt-auto">
        <MyMarkdown content={myContent}/>
    </div>
}

function Tahmid() {
    const myContent = `
# اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
Alhamdulillahi rabbil alamin  
Segala puji bagi Allah Tuhan Semesta Alam   

***  

Diucapkan untuk bersyukur kepada Allah
    `
    return <div className="bg-neutral text-neutral-content p-2 rounded text-center mt-auto">
        <MyMarkdown content={myContent}/>
    </div>
}

function Tahlil() {
    const myContent = `
# لَا إِلَهَ إِلَّا اللَّهُ

Laa ilaaha illallah  
Tidak ada Tuhan selain Allah.

***  

mengandung makna bahwa hanya Allah yang berhak disembah.
    `
    return <div className="bg-neutral text-neutral-content p-2 rounded text-center mt-auto">
        <MyMarkdown content={myContent}/>
    </div>
}

function Tasbih() {
    const myContent = `
# سُبْحَانَ الله
Subhanallah  
Maha Suci Allah

***  

Diucapkan untuk mengagungkan kebesaran Allah
    `
    return <div className="bg-neutral text-neutral-content p-2 rounded text-center mt-auto">
        <MyMarkdown content={myContent}/>
    </div>
}

function Istighfar() {
    const myContent = `
# أَسْتَغْفِرُ الله
Astaghfirullah  
Aku memohon ampun kepada Allah.

***  

Diucapkan untuk memohon ampun kepada Allah
    `
    return <div className="bg-neutral text-neutral-content p-2 rounded text-center mt-auto">
        <MyMarkdown content={myContent}/>
    </div>
}