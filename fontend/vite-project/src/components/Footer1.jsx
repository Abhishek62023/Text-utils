import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Footer1() {
  return (
    <div>

<footer className="text-center text-lg-start bg-body-tertiary text-muted "data-bs-theme="dark">
<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
    
    
          <Link className="me-4 text-reset" to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
        
        
          <Link className="me-4 text-reset" to="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></Link>
        
        
          <Link className="me-4 text-reset" to="facebook.com"><i className="fa-brands fa-linkedin"></i></Link>
          <Link className="me-4 text-reset" to="facebook.com"><i className="fa-brands fa-square-twitter"></i></Link>
          
          <Link className="me-4 text-reset" to="facebook.com"><i className="fa-brands fa-google"></i></Link>
          
          
          
          
        


    
    </div>
    </section>
    </footer>
      
    </div>
  )
}

export default Footer1
