import "./SideNav.css"
import React, { useState } from "react"
import EyeIcon from "../designs/EyeIcon"
import LinksList from "../lists/LinksList"

function SideNav() {
  const [isShown, setIsShown] = useState(false)

  return (
    <>
      <nav className="sidenav">
        <div className="sidenav-top"></div>
        <div className="sidenav-centre">
          <div className="add-container" onClick={() => setIsShown(!isShown)}>
            <span className="plus-icon">+</span>
          </div>
          {isShown && <LinksList />}
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
