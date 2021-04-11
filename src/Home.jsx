import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authenticate} from './actions';
import PropTypes from 'prop-types';

export class Home extends Component  {
  goToProfile = () => {
    this.props.navigate("profile")
  }

  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value)
  };

  render() {
    return (
      <>
      {
        this.props.isLoggedIn ? (
          <p>
          You are logged in <button onClick={this.goToProfile}>go to profile</button>
          </p>
        ) : (
          <form onSubmit={this.authenticate}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" size="28" />
          <label htmlFor="password">Password:</label>
          <input id="password" type="" name="password" size="28" />
          <button type="submit">Log in</button>
        </form>
        )
      }
     </>
    );
  }
}

Home.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};
  
export const HomeWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Home)