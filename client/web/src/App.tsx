import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Dashboard from './navbar/Dashboard';
import Inventory from './navbar/Inventory';
import Orders from './navbar/Orders';
import History from './navbar/History';

function App() {
  return (
    <div className='flex gap-5 bg-slate-50'>
      <NavBar />
      <div className='border-l px-12 bg-slate-50'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/history' element={<History />} />
      </Routes>
      </div>
      
    </div>
  )
}

export default App