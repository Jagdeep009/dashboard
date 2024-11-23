import './App.css'
import { Outlet } from 'react-router-dom'
import SideMenu from './components/SideMenu'

function App() {



  return (
    <div className='d-flex App'>
      <SideMenu />
      <Outlet />
      
    </div>
  )
}

export default App
