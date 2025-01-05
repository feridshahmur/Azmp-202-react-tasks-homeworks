import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";

const ClientHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.logo}>MyLogo</div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <li className={styles.menuItem}>
          <NavLink to={"/"} className={styles.link} data-active="true">
            Home
          </NavLink>
          <NavLink to={"/about"} className={styles.link}>
            About
          </NavLink>
          <NavLink to={"/products"} className={styles.link}>
            Products
          </NavLink>
          <NavLink to={"/contact"} className={styles.link}>
            Contact
          </NavLink>
        </li>
      </ul>
      <button className="btn btn-outline-warning">Contact-Us</button>
    </nav>
  );
};

export default ClientHeader;
