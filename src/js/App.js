import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/site1.css';
import '../css/QuizApp.css';
import Home from './Quiz/Home.jsx';
import LogoQuiz from './Quiz/Logo-Quiz.jsx';
import LogoFacile from './Quiz/Logo-Facile.jsx';
import AnimalQuiz from './Quiz/Animal-Quiz.jsx';
import Credit from './Quiz/Credit.jsx';

import SiteHome from './Site/SiteHome.jsx';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
           <route exact path="/"                                                component={SiteHome} />
           <Route exact path="/Quiz"                                            component={Home} />
           <Route exact path="/Quiz/LogoQuiz"                                   component={LogoQuiz} />
           <Route exact path="/Quiz/LogoQuiz/F"                                 component={LogoFacile} />
           <Route exact path="/Quiz/AnimalQuiz"                                 component={AnimalQuiz} />
           <Route exact path="/Quiz/Credit"                                     component={Credit} />
        </Switch>
      </Fragment>
    );
  }
}


export default App;
