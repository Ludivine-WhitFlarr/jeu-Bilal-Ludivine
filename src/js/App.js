import React, { Component } from 'react';
import '../css/App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import LogoQuiz from './Logo-Quiz.jsx';
import AnimalQuiz from './Animal-Quiz.jsx';
import Credit from './Credit.jsx';
import Adidas from '../img/logo/Adidas.png';
import Android from '../img/logo/android.png';
import Apple from '../img/logo/apple.png';
import BurgerKing from '../img/logo/burger-king.png';
import Carambar from '../img/logo/carambar.png';
import CocaCola from '../img/logo/cocacola.png';
import EdenSchool from '../img/logo/ednschool.png';
import Pepsi from '../img/logo/Pepsi.png';
import Puma from '../img/logo/puma.png';



class App extends Component {
  render() {
    return (

      <div className="App">
          <div className="Header">
              <h1><span className="spanh1">Q</span>uiz</h1>
          </div>
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
