import React from "react";
import logo from "./images/logo.png";

const Nav = () => {
return(
<>



<nav className="navbar navbar-expand-xl navbar-light py-4  a1 row mx-0  navFont pr-0 pl-0"  >
          <div className="pl-0 col-auto text-center ">
            <a className="navbar-brand p-0" style={{marginTop: '-6px'}} href="#">
              
                <img className="img-fluid" id="logo" src={logo} alt="blockpix Logo" /> 
             
              </a>
          </div>
          <div className="order-md-2 order-3 toggle-icon-custom">
          <button style={{marginRight:"30px", backgroundColor:"cyan"}} className="navbar-toggler btn-btn-toggle" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            </div>
          <div className="collapse navbar-collapse col  jc-end collapse-nav"  id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="#home">Home </a>
            
                <a className="nav-item nav-link" href="#services1">Services</a>
                <a className="nav-item nav-link" href="#elements">Elements</a>
                <a className="nav-item nav-link" href="#whitepaper">Portfolio</a>
                
            
                <a className="nav-item nav-link" href="https://blockpix.medium.com/" target="_blank">Prices</a>
              </div>
     
            
          </div>
          
          
        </nav>


</>

)

}

export default Nav;