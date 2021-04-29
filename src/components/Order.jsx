import React, { useEffect } from 'react';
import standart from '../assets/standart.png';
import premium from '../assets/premium.png';
import bisiness from '../assets/bisiness.png';
import '../stylesheets/order.css';
import '../stylesheets/button.css';
import { connect } from 'react-redux';
import { getAddressList, getCoords } from '../actions';


const Order = ({ getAddress, address, getCoords, token }) => {
  useEffect(() => {
    getAddress();
  }, [])

  function coordsRoute(event) {
    event.preventDefault();
    const { select_dot_a, select_dot_b } = event.target;
    getCoords(select_dot_a.value, select_dot_b.value);
  }
  return (
    <div className='map-wrapper'>
      <div className="order">
        <form className="order__form" id="order-form" onSubmit={coordsRoute}>
          <ul className="order__selects">
            <li className="order__selects-item">
              <select name="select_dot_a" id="select" className="select">
                <option selected disabled>Откуда</option>
                {address.list.map(item => (<option value={item}>{item}</option>))}
              </select>
            </li>
            <li className="order__selects-item">
              <select name="select_dot_b" id="select" className="select">
                <option selected disabled>Куда</option>
                {address.list.map(item => (<option value={item}>{item}</option>))}
              </select>
            </li>
          </ul>
        </form>
        <div className="order__tariff">
          <ul className="order__tariff-list">
            <li className="order__tariff-item">
              <div className="order__tariff-text">
                <div className="order__tariff-name">Стандарт</div>
                <div className="order__tariff-price-text">Стоимость</div>
                <div className="order__tariff-price">150 ₽</div>
              </div>
              <div className="order__tariff-car">
                <img src={standart} alt="Стандарт" className="order__tariff-img" />
              </div>
            </li>
            <li className="order__tariff-item">
              <div className="order__tariff-text">
                <div className="order__tariff-name">Премиум</div>
                <div className="order__tariff-price-text">Стоимость</div>
                <div className="order__tariff-price">250 ₽</div>
              </div>
              <div className="order__tariff-car">
                <img src={premium} alt="Стандарт" className="order__tariff-img" />
              </div>
            </li>
            <li className="order__tariff-item">
              <div className="order__tariff-text">
                <div className="order__tariff-name">Бизнес</div>
                <div className="order__tariff-price-text">Стоимость</div>
                <div className="order__tariff-price">300 ₽</div>
              </div>
              <div className="order__tariff-car">
                <img src={bisiness} alt="Стандарт" className="order__tariff-img" />
              </div>
            </li>
          </ul>
        </div>
        <div className="order__button">
          <button type='submit' className="button" form="order-form">Заказать</button>
        </div>
      </div>
    </div>
  )
}

export const ConnectOrder = connect(
  state => ({ address: state.address, coords: state.coords }),
  { getAddress: getAddressList, getCoords }
)(Order);