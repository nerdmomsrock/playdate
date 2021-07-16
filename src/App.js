import React, { Component } from "react";

import "./styles/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <main>
        <header>
          <h1>PlayDate</h1>
          <h3>Already a Guest?</h3>
          <button>Login</button>
          <h3>New Kid on the Block?</h3>
          <button>Create Account</button>
        </header>
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
            row of the minivan and then falling asleep together during the 6:00
            news. PlayDate....who needs lingerie when you can wear yoga pants?
          </p>
        </div>
        <div className="right">
          <img
            src="https://media.gettyimages.com/photos/couple-relaxing-on-sofa-while-moving-house-picture-id532097877?s=170667a"
            alt="exhausted pic"
          />
        </div>
      </main>
    );
  }
}

export default App;
