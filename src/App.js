import React from "react";
import {Home} from './Home'
import {Map} from './Map'
import {Profile} from './Profile'
import './App.css';
import {Header} from './Header'

const PAGES = {
  home: <Home/>,
  map: <Map/>,
  profile: <Profile/>,
}

class App extends React.Component {

  state = { currentPage: "home" }

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  render() {
    return <>
    <Header navigateTo={this.navigateTo}/>
    <main>
      <section>
        {PAGES[this.state.currentPage]}
      </section>
    </main>
    </>;
  }
}

export default App;
