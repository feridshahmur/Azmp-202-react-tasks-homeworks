import React  from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.module.scss'


const AdminHeader = () => {
  
  return (
    <header>
      <div className="container">
        <div className="logo">
            Logo
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/admin'}>Dashboard</NavLink>
                    <NavLink to={'/admin/product'}>ProductsTable</NavLink>
                    <NavLink to={'/admin/addproduct'}>Add Product</NavLink>
                    
                    
                </li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default AdminHeader
