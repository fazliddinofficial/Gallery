import React from "react";

const HeaderPart = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <span className="logo-span">Gallery Art</span>
        </div>
        <ul className="navbar-ul">
          <li className="navbar-ul-li">
            <a className="navbar-ul-li-a" href="#">
              Menu
            </a>
          </li>
          <li className="navbar-ul-li">
            <a className="navbar-ul-li-a" href="#">
              Support
            </a>
          </li>
          <li className="navbar-ul-li">
            <a className="navbar-ul-li-a" href="#">
              Help
            </a>
          </li>
        </ul>
        <ul className="registration-ul">
          <li className="reg-ul-li">
            <button className="registration-button">Register</button>
          </li>
          <li className="reg-ul-li">
            <a className="reg-ul-li-a" href="#">
              Log in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPart;
