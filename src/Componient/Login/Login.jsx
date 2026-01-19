import React from "react";
import {Logon} from './Login'
import Logo from '../../assets/Logo/logo.png'
import { AiOutlineGlobal } from "react-icons/ai";
import { FaMobileScreenButton, FaMoneyBillTransfer } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";






const Login = () => {
    return(
        <Logon>

            <div className="mainlogin">
   
                <div className="first">
                 <span>
                    <img src={Logo} alt="Logo" />
                 </span>
                  <div className="heade">
                    <h1>Welcome Back</h1>
                    <p>West Vent Online Bank</p>
                    <span>Swift and secure money transfers worldwide. Experience banking reimagined.</span>
                  </div>

                  <div className="boxss">
                    <div className="boxmaon">
                        <span className="icos"><RiSecurePaymentLine/></span>
                        <div className="writes">
                            <p>Bank-Grade Security</p>
                            <span>256-bit encryption</span>
                        </div>

                    </div>
                    <div className="boxmaon">
                        <span className="icos"><FaMoneyBillTransfer/></span>
                        <div className="writes">
                            <p>Instant Transfers</p>
                            <span>Real-time processing</span>
                        </div>

                    </div>
                    <div className="boxmaon">
                        <span className="icos"><AiOutlineGlobal/></span>
                        <div className="writes">
                            <p>Global Reach</p>
                            <span>200+ countries</span>
                        </div>

                    </div>
                    <div className="boxmaon">
                        <span className="icos"><FaMobileScreenButton/></span>
                        <div className="writes">
                            <p>Mobile First</p>
                            <span>iOS & Android</span>
                        </div>

                    </div>
                  </div>
                </div>

                <div>
                  <form action="">

                    </form>  
                </div>
            </div>


        </Logon>
    )
}


export default Login