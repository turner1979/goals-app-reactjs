import React from "react";
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
  render(){
    return(
      <div>
        <nav className="menu clearfix">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/goals">Goals</NavLink>
        </nav>
      </div>
    );
  }
}
