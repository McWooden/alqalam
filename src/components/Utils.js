import { useNavigate } from "react-router-dom"

export function Menu({title = '', items = ''}) {
    return <div className='flex flex-col gap-6 w-full max-w-sm'>
    <p className='font-semibold text-xl text-center'>{title}</p>
    <div className='flex flex-col gap-2'>
        {items.map((item, i) => <MenuItem item={item} key={i}/>)}
    </div>
</div>
}

function MenuItem({item}) {
    const navigate = useNavigate()

    return <div className='flex flex-col gap-2 items-center justify-center w-full flex-1 shadow p-4 cursor-pointer btn btn-neutral' onClick={() => navigate(item?.path || '/404')}>
        {item?.title || 'tanpa judul'}
    </div>
}