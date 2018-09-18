import React, { Component } from 'react';
import '../css/App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import LogoQuiz from './Logo-Quiz.jsx';
import AnimalQuiz from './Animal-Quiz.jsx';
import Credit from './Credit.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
           <Route exact path="/"              component={Home} />
           <Route exact path="/LogoQuiz"      component={LogoQuiz} />
           <Route exact path="/AnimalQuiz"      component={AnimalQuiz} />
           <Route exact path="/Credit"      component={Credit} />
        </Switch>
      </div>
    );
  }
}

export default App;
