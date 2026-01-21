import React, { useState } from "react";
import {Nav} from './Navbar'
import Logo from '../../assets/Logo/logo.png'
import { IoIosPersonAdd } from "react-icons/io";
import { RiMenu3Fill , RiCloseLargeFill} from "react-icons/ri";








const Navbar = () => {

    const [dropmenue, setDropmenue] = useState(false)

    const dropdwn = () => {
        setDropmenue(prev => !prev)
    }

    return(
        <Nav>
         <div className="Nav-bar">
            <div className="navleft" onClick={() => window.location.href = '/'}>
             <img src={Logo} alt="Logo" />
            </div>

          {dropmenue &&(
            <div className="mobilesview">
               <ul className="myurls">
                <li onClick={() => window.location.href = '/'}>Home</li>
                <li onClick={() => window.location.href = '/about-us'}>About</li>
                <li onClick={() => window.location.href = '/our-service'}>Services</li>
                <li onClick={() => window.location.href = '/contact-us'}>Contact</li>
                <li onClick={() => window.location.href = '/login'}>Login</li>
              <li style={{display: 'flex', justifyContent:'center', alignItems: 'center', gap: '3px'}} onClick={() => window.location.href = '/open-account'}>Open Account</li>
       
             </ul>
             
            </div>
          )}
 
<div className="dropdown-icon">
  {dropmenue ? (
    <RiCloseLargeFill onClick={dropdwn} />
  ) : (
    <RiMenu3Fill onClick={dropdwn} />
  )}
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
              <button style={{display: 'flex', justifyContent:'center', alignItems: 'center', gap: '3px'}} onClick={() => window.location.href = '/open-account'}><IoIosPersonAdd/> Open Account</button>
            </div>
         </div>

        </Nav>
    )
}


export default Navbar