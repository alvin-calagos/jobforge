import "./LinksList.css"
import React from "react"
import { NavLink } from "react-router-dom"

function LinksList() {
  return (
    <>
      <nav className="links-list">
        <NavLink className="links" to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className="links" to="/organisations">
          Organisations
        </NavLink>
        <NavLink className="links" to="/new-organisation">
          Add Organisation
        </NavLink>
      </nav>
    </>
  )
}

export default LinksList
