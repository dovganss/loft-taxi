import React from 'react';
import { Home } from './components/Home';
import { MapConnect } from './components/Map';
import { ProfileWithVerified } from './components/Profile';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <>
        <main className="wrapper">
          <section>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/registration' component={Home} />
              <PrivateRoute path='/map' component={MapConnect} />
              <PrivateRoute path='/profile' component={ProfileWithVerified} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export default App;