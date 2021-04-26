import React, { useEffect } from 'react';
import { Button, Typography, Card, CardContent, FormControl, InputLabel, Select } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAddressList, getCard } from "../actions";
const Map = ({ cardData, getAddress, getCard, token }) => {
  useEffect(() => {
    getAddress();
    getCard(token);      
  }, [])
  return (
    <>
    {cardData ? (
      <div className="destination">
        <Card>
          <CardContent className="destination__form">
            <FormControl>
              <InputLabel htmlFor="age-native-simple">Откуда</InputLabel>
              <Select className="select">
                <option aria-label="None" value="" />
                <option value={10}>Пулково (LED)</option>
                <option value={20}>Эрмитаж</option>
                <option value={30}>Кинотеатр Аврора</option>
                <option value={40}>Мариинский театр</option>
              </Select>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="age-native-simple">Куда</InputLabel>
              <Select className="select">
                <option aria-label="None" value="" />
                <option value={10}>Пулково (LED)</option>
                <option value={20}>Эрмитаж</option>
                <option value={30}>Кинотеатр Аврора</option>
                <option value={40}>Мариинский театр</option>
              </Select>
            </FormControl>
            <Button className="map__button" variant="contained" type="submit">Вызвать такси</Button>
          </CardContent>
        </Card>
      </div>) : (
        <div className="paper">
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2">Заполните платежные данные</Typography> 
              <Typography variant="body1" component="p">Укажите информацию о банковской карте, чтобы сделать заказ.</Typography>
              <Button variant="contained"><Link to="/profile">Перейти в профиль</Link></Button>
            </CardContent>
          </Card>
        </div>
      )}
      </>
  );
}
export const MapComponent = connect(
  state => ({cardData: state.payment.cardData, token: state.auth.token}),         
  {getAddress: getAddressList, getCard},
)(Map);