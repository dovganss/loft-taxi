import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../actions";

export const LoginForm = ({authenticate}) => {

  const onSubmit = (event) => {
    const {email, password} = event.target;
   authenticate(email.value, password.value)
   console.log(email.value, password.value)

  }

  return (
<form onSubmit={onSubmit}>
<label htmlFor="email">Email:</label>
<input type="email" name="email" size="28" />
<label htmlFor="email">Пароль:</label>
<input type="password" name="password" size="28" />
<button type="submit">Войти</button>
</form>
  )
}

export const LoginFormWithConnect = connect(null, {authenticate})(LoginForm)




