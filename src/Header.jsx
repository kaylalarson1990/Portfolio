import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <header>
          <nav>
            <ul className="nav">
              <li>
                <a href="#">
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
    );
  }
}

export default Header;
