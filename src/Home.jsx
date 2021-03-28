import React, { Component } from 'react'
import { withAuth } from './AuthContext'

export class Home extends Component  {
  goToProfile = () => {
    this.props.navigate("profile")
  }

  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value)
  }

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
  

export const HomeWithAuth = withAuth(Home)