import React from "react";
import PropTypes from "prop-types";
import logo from "./img/Subtract.png"
import logotext from "./img/lofttaxi.png"
import { Link } from "react-router-dom";
import { logOut } from './actions'

export class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <img className="logo_img" src={logo}></img>          
          <img className="logo_text" src={logotext}></img>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map">Карта</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
              <li>
                <Link onSubmit={this.logOut}>Выйти</Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Header;


