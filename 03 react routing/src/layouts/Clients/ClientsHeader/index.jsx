import React from 'react'
import { NavLink } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';

const ClHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container container-fluid">
        <a className="navbar-brand" href="#">
          Farid Chef's Menu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/menu">
              Catalog
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default ClHeader
