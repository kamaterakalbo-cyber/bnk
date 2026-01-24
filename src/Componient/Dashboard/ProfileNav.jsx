import React, { useEffect, useState } from "react";
import { Nav } from "./ProfileNav";
import Logo from "../../assets/Logo/logo.png";
import { VscAccount } from "react-icons/vsc";
import { IoMdArrowDropdown, IoIosNotifications } from "react-icons/io";
import useDashboard from './apifetch'

const ProfileNav = () => {
  const [dropdown, setDropdown] = useState(false);

  const fetchdata = useDashboard();

  const dropdowns = () => {
    setDropdown((prev) => !prev);
  };

  const Logout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };

  return (
    <Nav>
      <div className="navbars">
        <div className="left" onClick={() => window.location.href = '/profile'} >
          <img src={Logo} alt="" />
        </div>

        <div className="right">
          <span className="iconss">
            <IoIosNotifications />
          </span>
         
          <span>LTC 93</span>
          <span className="names">{fetchdata?.account?.first_name}</span>
          <div className="name">
            <span className="iconss" onClick={dropdowns}>
              <VscAccount />
            </span>
            <span className="iconss" onClick={dropdowns}>
              <IoMdArrowDropdown />
            </span>
            {dropdown && (
              <div className="dropdown">
                <span  onClick={() => (window.location.href = "/account")}>{fetchdata?.account?.first_name} {fetchdata?.account?.last_name}</span>
                <span  onClick={() => (window.location.href = "/account")}>Account</span>
                <span onClick={Logout}>Logout</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default ProfileNav;
