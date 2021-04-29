import React from 'react';
import { HeaderWithAuth } from './Header';
import sprite from './../assets/sprite.svg'
import '../stylesheets/profile.css';
import '../stylesheets/button.css';
import '../stylesheets/input.css'
import { connect, useDispatch } from 'react-redux';
import { cardInfo } from '../actions'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Profile = ({ cardVerified, token }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { cardNumber, expiryDate, cardName, cvc } = data;
    dispatch(cardInfo(cardNumber, expiryDate, cardName, cvc, token));
  };

  return (
    <>
      <HeaderWithAuth />
      {cardVerified ? (
        <div className="profile">
          <div className="profile__verified">
            <div className="profile__verified-title">Профиль</div>
            <div className="profile__verified-text">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
            <button className="button button--profile-verified-card">
              <Link to="/map">Перейти на карту</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="profile">
          <div className="profile__wrapper">
            <div className="profile__text">
              <div className="profile__title">Профиль</div>
              <div className="profile__description">Введите платежные данные</div>
            </div>
            <div className="profile__content">
              <form className="profile__form" id="card" onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                  <label htmlFor="cardName" className='input__label input__label--font-color--grey'>Имя владельца</label>
                  <input {...register('cardName')} name='cardName' type='text' label='Имя владельца' placeholder='Иван Иванов' className='input__field' />
                </div>
                <div className="input">
                  <label htmlFor="cardNumber" className='input__label input__label--font-color--grey'>Номер карты</label>
                  <input {...register('cardNumber')} name='cardNumber' type='text' label='Номер карты' placeholder='0000 0000 0000 0000' className='input__field' />
                </div>
                <div className="profile__row">
                  <div className="input">
                    <label htmlFor="expiryDate" className='input__label input__label--font-color--grey'>MM/YY</label>
                    <input {...register('expiryDate')} name='expiryDate' type='text' label='MM/YY' placeholder='01/05' className='input__field' />
                  </div>
                  <div className="input">
                    <label htmlFor="cvc" className='input__label input__label--font-color--grey'>CVC</label>
                    <input {...register('cvc')} name='cvc' type='text' label='CVC' placeholder='000' className='input__field' />
                  </div>
                </div>
              </form>
              <div className="profile__precheck">
                <div className="profile__precheck-content">
                  <div className="profile__precheck-up-side">
                    <svg className="profile__precheck-logo">
                      <use xlinkHref={`${sprite}#logo`}></use>
                    </svg>
                    <div className="profile__precheck-date">01/02</div>
                  </div>
                  <div className="profile__precheck-card-number">5545 2300 3432 4521</div>
                  <div className="profile__precheck-bottom-side">
                    <svg className="profile__precheck-chip">
                      <use xlinkHref={`${sprite}#chip`}></use>
                    </svg>
                    <svg className="profile__precheck-master-card-logo">
                      <use xlinkHref={`${sprite}#master-card`}></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__button">
              <button type="submit" className="button" form="card">Сохранить</button>
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}

export const ProfileWithVerified = connect(
  (state) => ({ cardVerified: state.payment.cardVerified, token: state.auth.token }),
)(Profile)