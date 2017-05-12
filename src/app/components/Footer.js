import React from "react";

export class Footer extends React.Component {
  render(){
    const today = new Date();
    return(
      <footer className="footer-bar">
        <p>copyright &copy; {today.getFullYear()} www.scottturner.co.uk</p>
      </footer>
    );
  }
}
