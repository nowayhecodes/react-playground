import React from "react";

import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { lang: "english" };

  onLanguageChange(lang) {
    this.setState({ lang });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          ></i>
        </div>
        <LanguageContext.Provider value={this.state.lang}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
