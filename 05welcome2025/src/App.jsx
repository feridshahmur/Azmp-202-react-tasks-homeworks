import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './layout/ClientLayout'
import Contact from './pages/Client/Contact'
import Home from './pages/Client/Home'
import NotFound from './components/NotFound'
import Products from './pages/Client/Product'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout/>}>
          <Route index element= {<Home/>}/>
          <Route path='*' element= {<NotFound/>}/>
          <Route path='products' element= {<Products/>}/>
          <Route path='contact' element= {<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
