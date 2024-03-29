import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import alqalam from '../assets/alqalam.png'
import { useCallback, useEffect, useState } from 'react';
import Search from './Search/Search';

function App() {
  const [lastPath, setLastPath] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const LastPathDisplay = useCallback(() => {
    const paths = location.pathname.split('/').filter(Boolean) // Split path by '/' and remove empty strings
  
    // Extract the last path
    const lastPath = paths.length > 0 ? paths[paths.length - 1] : ''
  
    setLastPath(lastPath)
  }, [location])
  
  useEffect(() => {
    LastPathDisplay()
  }, [LastPathDisplay])
  
  return <div className="drawer height-fill-avaible">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center">
      
      {/* drawer content */}
      {/* nav */}
      <div className="navbar bg-base-100">
        <div className="navbar-start w-fit">
          <div className="dropdown">
            <label role="button" className="btn btn-ghost btn-circle drawer-button" htmlFor="my-drawer-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
          </div>
        </div>
        <div className="navbar-center flex-1">
          {/* center content */}
          <Search text={lastPath}/>
        </div>
        <div className="navbar-end hidden">
          {/* end content */}
        </div>
      </div>
      
      {/* outlet */}
      <div className="max-w-[80rem] w-full flex-1">
        <Outlet />
      </div>

      {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      <div className="menu max-w-[80%] p-4 w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <div className="btn rounded justify-start h-fit" onClick={() => navigate('/')}>
          <img src={alqalam} alt="Alqalam png" className='w-10 drop-shadow'/>
          <p className='text-2xl'>Al-Qalam</p>
        </div>
        <div className="flex">
          <p className={`btn rounded justify-start ${location.pathname.startsWith('/app/belajar') && 'btn-neutral'}`} onClick={() => navigate('/app/belajar')}>Belajar Al-Qur'an Isyarat</p>
        </div>
        <p className={`btn rounded justify-start ${location.pathname.startsWith('/app/ilmu') && 'btn-neutral'}`} onClick={() => navigate('/app/ilmu')}>Ilmu Pengetahuan Islam</p>
        <p className={`btn rounded justify-start ${location.pathname.startsWith('/app/zikir') && 'btn-neutral'}`} onClick={() => navigate('/app/zikir')}>Zikir Harian</p>
      </div>
    </div>
  </div>
}

export default App;