// import react
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from './components/Home';
import { Goals } from './components/Goals';
import { About } from './components/About';

class App extends React.Component {
  render(){
      return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/goals" component={Goals} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      );
  }
}

render(<App/>, window.document.getElementById('app'));
