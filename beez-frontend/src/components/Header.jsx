import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
         <header>
    <nav className="navbar navbar-expand-lg bg-warning fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a id="logo" className="navbar-brand" href="#" style={{color: 'black', fontWeight: 'bold'}}>
          <img src="assets/images/logo.png" className="d-block w-100" alt="..." style={{height: 60}} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <center>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color: 'black', fontWeight: 'bold'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color: 'black', fontWeight: 'bold'}}>About us</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: 'black', fontWeight: 'bold'}}>Services</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{color: 'black', fontWeight: 'bold'}}>Contact us</Link>
              </li>
              <li>
                <Link to="/login">
                <button className="btn btn-dark">Log in</button>
                </Link>
              </li>
            </ul>
          </div>
        </center>
      </div>
    </nav>
  </header>
            
        </>
    )
}

export default Header
