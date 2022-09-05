import "./Navbar.css"
import React, { Fragment } from "react"
import { Outlet, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left"></div>
        <div className="nav-centre">
          <NavLink to="/dashboard">
            <span className="cog-icon">⚙</span>
          </NavLink>
        </div>
        <div className="nav-right">JOB FORGE</div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
