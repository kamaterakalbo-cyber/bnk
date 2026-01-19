import React from "react";
import {Nav} from './Navbar'
import Logo from '../../assets/Logo/logo.png'





const Navbar = () => {

    return(
        <Nav>
         <div className="Nav-bar">
            <div className="navleft" onClick={() => window.location.href = '/'}>
             <img src={Logo} alt="Logo" />
            </div>

            <div className="navmiddle">
             <ul>
                <li onClick={() => window.location.href = '/'}>Home</li>
                <li onClick={() => window.location.href = '/about-us'}>About</li>
                <li onClick={() => window.location.href = '/our-service'}>Services</li>
                <li onClick={() => window.location.href = '/contact-us'}>Contact</li>
             </ul>
            </div>

            <div className="navright">
              <span onClick={() => window.location.href = '/login'}>Login</span>
              <button onClick={() => window.location.href = '/open-account'}>Open Account</button>
            </div>
         </div>

        </Nav>
    )
}


export default Navbar