import { Route, Routes } from 'react-router-dom'
import './App.css'

import MainHeader from './layout/ClientMainHeader'

import Home from './pages/Client/Home'
import ProductDetails from './pages/Client/ProductDetail'
import Product from './pages/Client/Products'
import Wishlist from './pages/Client/Wishlist'
import AdminLayout from './layout/AdminMainHeader'
import Dashboard from './pages/Client/Home'
import ProductTable from './pages/Admins/Product'
import AddProduct from './pages/Admins/AddProduct'
import Basket from './pages/Client/Basket'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='product/:id' element={<ProductDetails/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='basket' element={<Basket/>}/>
        </Route>
        <Route path='/admin' element = {<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/admin/product' element={<ProductTable/>}/>
          
          <Route path='/admin/addproduct' element={<AddProduct/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
