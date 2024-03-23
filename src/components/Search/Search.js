import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Search({text = 'Cari'}) {
    const [openSearch, setOpenSearch] = useState(false)
    const closeSearchList = useRef(null)
    function handleCloseSearchList() {
        closeSearchList.current.click()
    }
    return <div className="w-full ml-2">
        <label className="input shadow flex items-center w-full cursor-pointer bg-base-200/50" htmlFor="my_modal_7" onClick={() => {
            setOpenSearch(true)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 text-neutral-500"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <div className="pl-2 grow flex items-center text-lg text-neutral-500">{text}</div>
        </label>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
            <SearchList onClose={handleCloseSearchList} isOpen={openSearch}/>
            <label ref={closeSearchList} className="modal-backdrop" htmlFor="my_modal_7" onClick={() => setOpenSearch(false)}>Close</label>
        </div>
    </div>
}

function SearchList({onClose, isOpen}) {
    const list = [
        {title: "Al-Qalam (home)", path:'/'},
        {title: "Waktu Sholat (home)", path:'/'},
        {title: "Belajar Al-Qur'an isyarat", path:'/app/belajar'},
            {title: 'Mengenal Huruf Hijaiyah isyarat', path: '/app/belajar/pengenalan'},
            {title: 'Tingkat 1', path: '/app/belajar/tingkat-1'},
            {title: 'Tingkat 2', path: '/app/belajar/tingkat-2'},
            {title: 'Tingkat 3', path: '/app/belajar/tingkat-3'},
        {title: "Ilmu Pengetahuan Islam", path:'/app/ilmu'},
            {title: 'Akidah', path: '/app/ilmu/akidah'},
                {title: 'Rukun Iman', path: '/app/ilmu/akidah/rukun-iman'},
            {title: 'Akhlak', path: '/app/ilmu/akhlak'},
            {title: 'Ibadah', path: '/app/ilmu/ibadah'},
            {title: 'Tarikh', path: '/app/ilmu/tarikh'},
        {title: "Zikir Harian", path:'/app/zikir'},
            {title: 'Takbir', path: '/app/zikir/takbir'},
            {title: 'Tahmid', path: '/app/zikir/tahmid'},
            {title: 'Tahlil', path: '/app/zikir/tahlil'},
            {title: 'Tasbih', path: '/app/zikir/tasbih'},
            {title: 'Istighfar', path: '/app/zikir/istighfar'},
    ]

    const [query, setQuery] = useState('')
    const [results, setResults] = useState(list)
    const [selectedResultIndex, setSelectedResultIndex] = useState(-1)
    const navigate = useNavigate()

    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 1)
        }
    }, [isOpen])

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedResultIndex((prevIndex) => Math.max(prevIndex - 1, 0))
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedResultIndex((prevIndex) =>
                Math.min(prevIndex + 1, results.length - 1)
            )
        } else if (e.key === 'Enter') {
            e.preventDefault()
            if (selectedResultIndex !== -1) {
                navigate(results[selectedResultIndex].path)
                setQuery('')
                onClose()
            }
        }
    }

    const handleInputChange = (e) => {
        const { value } = e.target
        setQuery(value)

        setResults(list.filter(item => item.title.toLowerCase().includes(value.toLowerCase())))
    }

    return <div className="modal-box h-full flex flex-col gap-2">
        <label className="input input-bordered flex items-center cursor-text text-neutral-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <input ref={inputRef} tabIndex={1} type="text" className="grow input input-ghost border-none bg-transparent pl-2" placeholder="Cari" value={query} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
        </label>
        <div className="flex-1 h-full overflow-auto flex flex-col gap-2">
            {results.map((item, index) => <div className={`flex flex-col gap-2 p-4 rounded cursor-pointer ${index === selectedResultIndex ? 'bg-neutral text-neutral-content' : 'bg-base-200'}`} key={index} onMouseOver={() => setSelectedResultIndex(index)} onClick={() => navigate(item.path)}>
                <p className="font-semibold">{item.title}</p>
                <div className="text-xs flex flex-wrap">{item.path.split('/').filter(Boolean).map((item, index) => <span className='hover:underline cursor-pointer' key={index}>{item}/</span>)}</div>
            </div>)}
        </div>
    </div>
}