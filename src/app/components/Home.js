import React from "react";
import { Header } from "./Header";

export class Home extends React.Component {
  render(){
    return(
      <div>
        <div className="wrapper">
          <Header />
          <div className="card--home">
            <h2 className="card--home__title">Goals<strong>App</strong></h2>
            <p className="card--home__desc">A simple app written with ReactJS for tracking your goals.</p>
          </div>
        </div>
      </div>
    );
  }
}
