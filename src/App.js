import React, { Component } from 'react';
import Nav from './Components/Nav';
import Login from './Components/Login/Login';
import Account from './Components/Account/Account';
import Bios from './Components/Bios/Bios';
import Matches from './Components/Matches/Matches';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import routes from './routes';
//import "./App.css";

//import "./styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/bios" component={Bios} />
            <Route path="/matches" component={Matches} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
