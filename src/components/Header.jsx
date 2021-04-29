import React from 'react';
import './../stylesheets/header.css';
import sprite from './../assets/sprite.svg';
import { connect } from 'react-redux';
import { logOut } from '../actions';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <svg className="header__logo--img">
            <use xlinkHref={`${sprite}#logo`}></use>
          </svg>
          <svg className="header__logo--title">
            <use xlinkHref={`${sprite}#title`}></use>
          </svg>
        </div>
        <ul className="header__menu">
          <li className="header__menu-item active">
            <Link to='/map'>Карта</Link>
          </li>
          <li className="header__menu-item">
            <Link to='/profile'>Профиль</Link>
          </li>
          <li className="header__menu-item">
            <span onClick={this.unauthenticate}>
              Выйти
                </span>
          </li>
        </ul>
      </header>
    )
  }
}

export const HeaderWithAuth = connect(
  null,
  { logOut }
)(Header)