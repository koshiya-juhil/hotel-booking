import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import List from './pages/List';
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register';
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/hotels" element={<List/>} ></Route>
        <Route path="/hotels/:id" element={<Hotel/>} ></Route>
        <Route element={<NotFound/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
