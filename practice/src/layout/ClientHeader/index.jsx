import React  from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.module.scss'
import { useContext } from "react";
import { FavoritesContext } from "../../context/WishlistProvider/index";
import { BasketContext } from '../../context/BasketProvider';

const ClientHeader = () => {
  const { favorites } = useContext(FavoritesContext);
  const { basket } = useContext(BasketContext);
  return (
    <header>
      <div className="container">
        <div className="logo">
            Logo
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/product'}>Products</NavLink>
                    <NavLink to={'/wishlist'}>Wishlist<sup className={styles.favoriteCount}>{favorites.length}</sup></NavLink>
                    <NavLink to={'/basket'}>Basket<sup className={styles.favoriteCount}>{basket.length}</sup></NavLink>
                    
                    
                </li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default ClientHeader
