import './Navbar.css';
import React, {Fragment} from "react";
import { Outlet, NavLink } from "react-router-dom";

function Navbar() { 
  return ( 
    <>
      <nav className="navbar">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/organisations">Organisations</NavLink>
      </nav>
      <Outlet />
    </>
  );
};
 
 export default Navbar;