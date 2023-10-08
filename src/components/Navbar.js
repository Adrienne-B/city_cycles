import React from 'react'
import Logo from '../images/Logo.png';
import {Link} from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img class="Logo" alt="logo" src={Logo}/>
        {/* <img style={{ width: 145 }} src={Logo}/> */}
      </div>

      <div className="rightSide">
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
            {/* <Link to="/reservations">Reservations</Link> */}
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar