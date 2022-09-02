import "./SideNav.css"
import React from "react"
import EyeIcon from "../designs/EyeIcon"
// import { Outlet, NavLink } from "react-router-dom"

function SideNav() {
  return (
    <>
      <nav className="sidenav">
        <div className="sidenav-top"></div>
        <div className="sidenav-centre">
          <div className="add-container">
            <span className="plus-icon">+</span>
          </div>
          <div className="view-container">
            <div className="eye-container">
              <EyeIcon />
            </div>
          </div>
        </div>
        <div className="sidenav-bottom">
          <span className="user-ellipse">DL</span>
        </div>
      </nav>
    </>
  )
}

export default SideNav
