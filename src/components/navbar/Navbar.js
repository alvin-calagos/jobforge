import "./Navbar.css"
import React, { Fragment } from "react"
import { Outlet, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">JOB FORGE</div>
        <div className="nav-centre">
          <NavLink to="/dashboard">
            <span className="cog-icon">⚙</span>
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink to="/organisations">Organisations</NavLink>
          <NavLink to="/new-organisation">Add Organisation</NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
