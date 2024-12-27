import { Route, Routes } from 'react-router-dom'
import { useContext } from "react";
import './App.css'
import Header from './layouts/Header'
import HeaderLayout from './layouts/HeaderLayout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Wishlist from './pages/Wishlist'
import Contact from './pages/Contact'
import { ThemeContext } from "./context/ThemeProvider/index";
function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000", color: theme === "light" ? "#000" : "#fff" }}>
     <div></div>
      <h1>React Context API</h1>
      {/* <HeaderLayout/> */}
      <Routes>
        <Route path='/' element={<HeaderLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='catalog' element={<Catalog/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
