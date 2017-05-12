import React from "react";
import { Header } from "./Header";

export class About extends React.Component {
  render(){
    return(
      <div>
        <div className="wrapper">
          <Header />
          <p>This app was written using React JS, it demonstrates the following:</p>
          <ul>
            <li><i className="fa fa-check" aria-hidden="true"></i> Creating components</li>
            <li><i className="fa fa-check" aria-hidden="true"></i> Routing</li>
            <li><i className="fa fa-check" aria-hidden="true"></i> Using State</li>
            <li><i className="fa fa-check" aria-hidden="true"></i> Using Props</li>
            <li><i className="fa fa-check" aria-hidden="true"></i> Events</li>
            <li><i className="fa fa-check" aria-hidden="true"></i> Scalable Architecture</li>
          </ul>
        </div>
      </div>
    );
  }
}
