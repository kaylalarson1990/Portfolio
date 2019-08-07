import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header.jsx";
import HomePage from "./HomePage.jsx";
import Work from "./Work.jsx";
import About from "./About.jsx";
import Error from "./Error.jsx";

class App extends Component {
  homePage = () => (
    <>
      <HomePage />
    </>
  );

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/Portfolio" component={() => this.homePage()} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route render={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
