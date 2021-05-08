import React from 'react';
import './../stylesheets/home.css';
import sprite from './../assets/sprite.svg';
import { LoginWithAuth } from './Login';
import { connectRegistration } from './registration';
import { Route, Switch } from 'react-router';

export class Home extends React.Component {
  render() {
    return (
      <div className='home' >
        <div className='home__left-side'>
          <div className="home__logo">
            <svg className="home__logo--img">
              <use xlinkHref={`${sprite}#logo`}></use>
            </svg>
            <svg className="home__logo--title">
              <use xlinkHref={`${sprite}#title`}></use>
            </svg>
          </div>
        </div>
        <div className='home__right-side'>
          <div className="home__login-form">
            <Switch>
              <Route exact path='/' component={LoginWithAuth} />
              <Route path='/registration' component={connectRegistration} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}