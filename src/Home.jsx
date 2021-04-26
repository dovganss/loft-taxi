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
   if(this.props.isLoggedIn){
     this.props.history.push('/map')}

    return (
      <>
          <div className="home"> 
          <img src={logo} className="home__logo1"></img>
          <img src={logotext} className="home__logo2"></img>
          <form className="home__form" onSubmit={this.authenticate}>
           <p className="title">Войти</p> 
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" size="28" />
            <label htmlFor="email">Пароль:</label>
            <input type="password" name="password" size="28" />
            <Link to="" className="home__text home__text--href">Забыли пароль?</Link>
            <button type="submit">Войти</button>
            <span className="home__text">Новый пользователь? <Link to="/registration" className="home__href">Регистрация</Link></span>
          </form>
          </div>
      </>)
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
