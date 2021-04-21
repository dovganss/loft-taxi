import React, { Component } from "react";
import { authenticate } from "./actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./img/Subtract.png"
import logotext from "./img/lofttaxi.png"

export class Home extends Component {
  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in. <Link to="/profile">Go to profile</Link>
          </p>
        ) : (
          <div className="home"> 
          <img src={logo} className="home__logo1"></img>
          <img src={logotext} className="home__logo2"></img>
          <form onSubmit={this.authenticate}>
           <p className="title">Войти</p> 
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" size="28" />
            <label htmlFor="email">Пароль:</label>
            <input type="password" name="password" size="28" />
            <button type="submit">Войти</button>
          </form>
          </div>
          
        )}
      </>
    );
  }
}

Home.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
};

export const HomeWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Home);
