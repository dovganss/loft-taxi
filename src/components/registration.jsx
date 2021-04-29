import React from 'react';
import './../stylesheets/login.css';
import './../stylesheets/button.css';
import { Link, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { registrationAction } from '../actions';
import { useForm } from 'react-hook-form';

const Registration = ({ status }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    const { email, password, name, surname } = data;
    dispatch(registrationAction(email, password, name, surname));
  }

  if (status) {
    history.push('/map');
  }
  return (
    <div className="login">
      <div className="login__title">Регистрация</div>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className='input__label'>Email:</label>
        <input {...register('email')} name='email' type='email' label='Email' placeholder='mail@mail.ru' className='input__field' />
        <label htmlFor="name" className='input__label'>Введите ваше имя:</label>
        <input {...register('name')} name='name' type='text' label='Введите ваше имя' placeholder='Иван' className='input__field' />
        <label htmlFor="surname" className='input__label'>Введите вашу фамилию:</label>
        <input {...register('surname')} name='surname' type='text' label='Введите вашу фамилию' placeholder='Иванов' className='input__field' />
        <label htmlFor="password" className='input__label'>Пароль:</label>
        <input {...register('password')} name='password' type='password' label='Пароль' placeholder='********' className='input__field' />
        <button type='submit' className="button button--login">
          Зарегестрироваться
        </button>
      </form>
      <div className="login__new-user">
        <span>Уже зарегестрированны? </span>
        <span className="login__registration"><Link to="/">Войти</Link></span>
      </div>
    </div>
  )
}

export const connectRegistration = connect(
  (state) => ({ status: state.registration.status }),
)(Registration);