import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Home from './navbar/Home';
import Products from './navbar/Products';
import Analytics from './navbar/Analytics';
import Notifications from './navbar/Notifications';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/notifications' element={<Notifications />} />
      </Routes>
    </div>
  )
}

export default App