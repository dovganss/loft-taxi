import React, { Component } from "react";
import logo from "./img/Subtract.png"
import logotext from "./img/lofttaxi.png"
import { Link } from "react-router-dom";

export class Registration extends Component {

  render() {

    return (
      <>
          <div className="home"> 
          <img src={logo} className="home__logo1"></img>
          <img src={logotext} className="home__logo2"></img>
          <form className="home__form">
           <p className="title">Регистрация</p> 
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" size="28" />
            <label htmlFor="">Как вас зовут?</label>
            <input type="" name="" size="" />
            <label htmlFor="email">Придумайте пароль</label>
            <input type="password" name="password" size="28" />
            <button type="submit">Зарегистрироваться</button>
            <span className="home__text">Уже зарегистрированы? <Link to="" className="home__href">Войти</Link></span>
          </form>
          </div>
      </>)
  }
}

