import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

import img from '../images/1.png'

function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/login">
      <img src={img} alt="Logo" width="40" height="32" className="d-inline-block align-text-top"/>
      
      
    </Link>
    
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className='position-absolute top-0 start-50 translate-middle text-white mt-3'> <h4>Aarti </h4></li>
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/"><i className="fas fa-home me-2"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about"> <i className="fa-regular fa-address-card"></i></Link>
        </li>
        </ul>
        <form className="d-flex" role="search">
        <div className="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login"><i className="fa-solid fa-right-to-bracket"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/register"><i className="fa-solid fa-user-plus"></i></Link>
        </li>
        </div>
        
      </form>
   </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
