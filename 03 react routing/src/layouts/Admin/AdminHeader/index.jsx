import React from 'react'
import { NavLink } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';

const AdHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Admin
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
            <NavLink className="nav-link active" aria-current="page" to="/admin">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/admin/users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="/admin/products">
              Products
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default AdHeader
