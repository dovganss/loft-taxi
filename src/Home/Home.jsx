import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoginFormWithConnect } from './LoginForm';

export class Home extends Component {
  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in. <Link to="/profile">Go to profile</Link>
          </p>
        ) : (
         <LoginFormWithConnect />
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
)(Home);
