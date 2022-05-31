import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import logo from '../../assets/Images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
import plus from '../../assets/Images/plus.svg'
import notification from '../../assets/Images/notification.svg'
import search from '../../assets/Images/search.svg'
const Header = () => {
  return (
    <div className="header">
      <div className="container header-container">
        <div className="header-categories">
          <div className="sd">
          <div className="header-categories-logo">
            <Link to="/">
              <img src={logo} alt=""/>
            </Link>
          </div>
          <div className="nav-wrapper">
            <ul className="navigation">
              <li className="navigation-item">
                <Link to="/">
                  Movies
                </Link>
              </li>
              <li className="navigation-item">
                <Link to="/">
                  TV Shows
                </Link>
              </li>
              <li className="navigation-item">
                <Link to="/people/">
                  People
                </Link>
              </li>
              <li className="navigation-item">
                <Link to="/">
                  More
                </Link>
              </li>
            </ul>
          </div>
          </div>
          <div className="flex">
            <ul className="navigation-config">
              <li className="navigation-config-item navigation-config-item-plus">
                <Link to={"/"}>
                  <img src={plus} alt=""/>
                </Link>
              </li>
              <li className="navigation-config-item">
                <div className="navigation-config-item navigation-config-item-translate">
                  EN
                </div>
              </li>
              <li className="navigation-config-item navigation-config-item-notification">
                <Link to={"/"}>
                  <img src={notification} alt=""/>
                </Link>
              </li>
              <li className="navigation-config-item">
                <div className="navigation-config-item navigation-config-item-user">
                  R
                </div>
              </li>
              <li className="navigation-config-item navigation-config-item-search">
                <Link to={"/"}>
                  <img src={search} alt=""/>
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