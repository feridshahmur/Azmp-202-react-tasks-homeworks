import './App.css'

import { Route, Routes } from "react-router-dom";
import AdUsers from './pages/Admin/Users';
import AdLayout from './components/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';

import ClLayout from './components/ClientLayout';
import Home from './pages/Client/Home';
import Menu from './pages/Client/Products';
import AdminProducts from './pages/Admin/Products';
import ClContact from './pages/Client/Contact';
import ProductDetails from './pages/Client/ProductsDetail';

function App() {


  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/admin/products' element={<AdminProducts />} />
          <Route path='/admin/users' element={<AdUsers />} />


        </Route>
        <Route path='/' element = {<ClLayout/>}>
          <Route index element = {<Home/>} />
          <Route path='home' element = {<Home/>} />
          <Route path='menu' element = {<Menu/>} />
          <Route path='menu/:id' element = {<ProductDetails/>} />

          <Route path='contact' element = {<ClContact/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App