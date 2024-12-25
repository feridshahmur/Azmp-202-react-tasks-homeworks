import './App.css'

import { Route, Routes } from "react-router-dom";
import AdUsers from './pages/Admin/Users';
import AdLayout from './components/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';
import AdProducts from './pages/Admin/Products';
import ClLayout from './components/ClientLayout';
import Home from './pages/Client/Home';
import Menu from './pages/Client/Products';

function App() {


  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/admin/products' element={<AdProducts />} />
          <Route path='/admin/users' element={<AdUsers />} />


        </Route>
        <Route>
          <Route path='/' element = {<ClLayout/>} />
          <Route path='/home' element = {<Home/>} />
          <Route path='/menu' element = {<Menu/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
