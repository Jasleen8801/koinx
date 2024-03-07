import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid d-flex align-items-center">
        <a href="#" className="navbar-brand" style={{ marginLeft: 30 }}>
          <img src={logo} alt="logo" width={50} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-1">
              <a href="#" className="nav-link" style={{ color: 'black' }}>Crypto Taxes</a>
            </li>
            <li className="nav-item mx-1">
              <a href="#" className="nav-link" style={{ color: 'black' }}>Free Tools</a>
            </li>
            <li className="nav-item mx-1">
              <a href="#" className="nav-link" style={{ color: 'black' }}>Resource Center</a>
            </li>
          </ul>
          <button className='btn btn-primary mx-2 rounded px-4'>Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
