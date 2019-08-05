import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
          <Router>
      <header>
        <nav>
          <ul className="nav">
            <li>
              <a href="#" className="glasses">
                <NavLink to="/" exact activeClassName="active">
                Home
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#">
                <NavLink to="/work" exact activeClassName="active">
                  Work
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#">
                <NavLink to="/about" exact activeClassName="active">
                  About
                </NavLink>
              </a>
            </li>
          </ul>
        </nav>
      </header>
          </Router>
    );
  }
}


export default Header;
