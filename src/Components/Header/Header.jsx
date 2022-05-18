import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/Images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="container header-container">
        <div className="header-categories">
          <div className="header-categories-logo">

              <img src={logo} alt=""/>

          </div>
          <div className="ll">
            <ul className="navigation">
              <li className="navigation-item">
                <Link to={"/"}>
                  Movies
                </Link>
              </li>
              <li className="navigation-item">
                <Link to={"/"}>
                  TV Shows
                </Link>
              </li>
              <li className="navigation-item">
                <Link to={"/"}>
                  People
                </Link>
              </li>
              <li className="navigation-item">
                <Link to={"/"}>
                  More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;