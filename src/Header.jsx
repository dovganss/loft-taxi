import React from "react";
import PropTypes from "prop-types";
import logo from "./img/Subtract.png"
import logotext from "./img/lofttaxi.png"
import { Link } from "react-router-dom";
import { logOut } from './actions'
import { connect } from "react-redux";

export class Header extends React.Component {
  logOut = (event) => {
    event.preventDefault();
    this.props.logOut();
  };
  render() {
    return (
      <>
        <header>
          <img className="logo_img" src={logo}></img>          
          <img className="logo_text" src={logotext}></img>
          <nav>
            <ul>
              <li>
                <Link to="/map">Карта</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
              <li>
                <span className="link" onClick={this.logOut}>Выйти</span>
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

export const HeaderWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { logOut }
)(Header);


