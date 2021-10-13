import { logDOM } from '@testing-library/dom';
import React, { useState } from 'react';
import logo from "../src/images/logo.png"
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'



const Header = () => {
  return (
    <div>
        <nav className=" navbar navbar-expand-lg navbar-dark bg-black">
            
              <Link className="nav-link" to="/Home"><img src={logo} style={{width:150, marginTop: -20}} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 ">
                        <li className="nav-item"><Link className="nav-link" to="/Home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Playlists">Playlists</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/signup">Cadastre-se</Link></li>
                        <li className="me-3 nav-item"><Link className="nav-link" to="/Faq">Faq</Link></li>
                        
                    </ul>
                </div>
            
        </nav>
    </div>
  );
}


export default Header;