import React from "react";
import { ProfileWithConnect } from "./Profile";
import { HomeWithConnect } from "./Home";
import { Map } from "./Map";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import logo from "./img/Subtract.png"
import logotext from "./img/lofttaxi.png"

export class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <img className="logo_img" src={logo}></img>          
          <img className="logo_text" src={logotext}></img>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map">Карта</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
              <li>
                <Link to="">Выйти</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>
            <Switch>
              <Route exact path="/" component={HomeWithConnect} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithConnect} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
