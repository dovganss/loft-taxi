import React from "react";
import { ProfileWithConnect } from "./Profile";
import { HomeWithConnect } from "./Home";
import { Map } from "./Map";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";


export class App extends React.Component {
  render() {
    return (
      <>
       
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
