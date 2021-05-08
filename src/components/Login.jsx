import React from 'react';
import './../stylesheets/login.css';
import './../stylesheets/button.css';
import '../stylesheets/input.css'
import { connect, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { authenticate } from '../actions';


export const Login = ({ isLoggedIn }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(authenticate(email, password));
  }

  if (isLoggedIn) {
    history.push('/map')
  }

  return (
    <div className="login">
      <div className="login__title">Войти</div>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className='input__label'>Email:</label>
        <input {...register('email')} name='email' type='email' label='Email' placeholder='mail@mail.ru' className='input__field' />
        <label htmlFor="password" className='input__label'>Password:</label>
        <input {...register('password')} name='password' type='password' label='Пароль' placeholder='********' className='input__field' />
        <a href="#" className="login__forgot-password">Забыли пароль?</a>
        <button type="submit" className="button button--login">
          Войти
        </button>
      </form>
      <div className="login__new-user">
        <span>Новый пользователь? </span>
        <span className="login__registration"><Link to="/registration">Регистрация</Link></span>
      </div>
    </div>
  )
}

export const LoginWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
)(Login)