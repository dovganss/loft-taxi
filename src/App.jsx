import React from "react";
import {HomeWithAuth} from './Home'
import {Map} from './Map'
import {ProfileWithAuth} from './Profile'
import {Header} from './Header'
import {withAuth} from './AuthContext'
import PropTypes from 'prop-types';
import './App.css';

const PAGES = {
  home: (props) => <HomeWithAuth {...props}/>,
  map: (props) => <Map {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>,
}

class App extends React.Component {

  state = { currentPage: "home" }

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({currentPage: page});
    }else{
      this.setState({currentPage: "home"});
    }
  };

  render() {
    return <>
    <Header navigateTo={this.navigateTo}/>
    <main>
      <section>
        {PAGES[this.state.currentPage]({navigate: this.navigateTo})}
      </section>
    </main>
    </>;
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
