import React, { useEffect } from 'react';
import { Button, FormControl, InputLabel, Select } from '@material-ui/core';
import { connect } from 'react-redux';
import { getAddressList, route } from "./../actions";


const MapComponent = ({ getAddress, address, route, token }) => {
  useEffect(() => {
    getAddress();    
  }, [])

  function coordsRoute(event) {
    event.preventDefault();
    const { select_dot_a, select_dot_b } = event.target;
    route(select_dot_a.value, select_dot_b.value);
  }

  return (
      <div className="destination">
      <form className="form_map" onSubmit={coordsRoute}> 
            <FormControl>
              <InputLabel htmlFor="age-native-simple"></InputLabel>
              <Select name="select_dot_a" id="select" className="select">
                <option selected disabled>Откуда</option>
                {address.list.map(item => (<option value={item}>{item}</option>))}
              </Select>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="age-native-simple"></InputLabel>
              <Select  name="select_dot_b" id="select" className="select">
              <option selected disabled>Куда</option>
                {address.list.map(item => (<option value={item}>{item}</option>))}
               </Select>
            </FormControl>
            <Button className="map__button" variant="contained" type="submit">Вызвать такси</Button>
            </form>  </div>
      )
  }

export const MapComponentWithConnect = connect(
  state => ({ address: state.address, coords: state.coords }),         
  { getAddress: getAddressList, route },
)(MapComponent);