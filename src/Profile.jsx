import React, { Component } from "react";
import {logIn, logOut} from './actions'
import {connect} from 'react-redux'
import Header from "./Header";


export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (

      <p>
      < Header />
        <form className="form_profile" onSubmit={this.authenticate}>
           <p className="title">Профиль</p> 
           <p className="subtitle">Ввдеите платежные данные</p> 
            <label className="label_profile" htmlFor="">Имя владельца</label>
            <input type="" name="" size="" />
            <label className="label_profile" htmlFor="">Номер карты</label>
            <input type="" name="" size="" />
            <label className="label_profile" htmlFor="">MM/YY</label>
            <input type="" name="" size="" />
            <label className="label_profile" htmlFor="">CVC</label>
            <input type="" name="" size="" />
            <button type="submit">Сохранить</button>
          </form>
      </p>
      
    );
  }
}

export const ProfileWithConnect = connect(
  null,
  { logIn, logOut }
)(Profile);
