import React, { Component } from "react";
import Nav from "./Nav";
import Login from "./Login";
import Account from "./Account";
import Bios from "./Bios";
import Matches from "./Matches";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import routes from './routes';

//import "./styles/app.css";

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
          <div className="left">
            <p>
              Are you single parenting like a boss, but interested in adding the
              chaos of dating to your already exhausting life? Sure, there are
              other dating sites. You've probably spent an annoying amount of
              hours surfing those, only to be discouraged by the assumption that
              it's easy for someone like you to find, maintain, and enjoy a
              relationship. We at PlayDate know just what you need. Enjoy our
              parent-centered profile builder, and find other single pringles
              looking to mingle who share your level of sarcasm and inability to
              participate in an impromptu cocktail hour. We encourage one night
              stands - if they solely consist of teamwork cleaning out the third
              row of the minivan and then falling asleep together during the
              6:00 news. PlayDate....who needs lingerie when you can wear yoga
              pants?
            </p>
          </div>
          <div className="right">
            <img
              src="https://media.gettyimages.com/photos/couple-relaxing-on-sofa-while-moving-house-picture-id532097877?s=170667a"
              alt="exhausted pic"
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
