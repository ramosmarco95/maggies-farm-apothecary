// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/maggies-logo.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fs-4  ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className="rounded" src={logo} alt='logo' style={{width: '100px', height: '100px'}}/></Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Coming Soon</a></li>
                <li><a className="dropdown-item" href="#">Coming Soon</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
