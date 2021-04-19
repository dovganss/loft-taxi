import React from "react";
import {useForm} from 'react-hook-form'
import { useDispatch } from "react-redux";
import { authenticate } from "../actions";

export const LoginForm = ({useDispatchHook = useDispatch}) => {
  const dispatch = useDispatchHook()
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    const {email, password} = data;
    dispatchEvent(authenticate(email, password))

  }

  return (
<form onSubmit={handleSubmit(onSubmit)}>
<label htmlFor="email">Email:</label>
<input ref={register} type="email" name="email" size="28" />
<label htmlFor="email">Пароль:</label>
<input ref={register} type="password" name="password" size="28" />
<button type="submit">Войти</button>
</form>
  )
}





