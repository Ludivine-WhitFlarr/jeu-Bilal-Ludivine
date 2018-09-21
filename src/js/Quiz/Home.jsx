import React, { Component } from 'react';
import Logo from "../../img/logo-Logo.png";
import '../../css/QuizApp.css';

class Home extends Component {
  render() {
    return (
      <div className="bodyquiz">
          <div className="Header">

              <h1><img className="imgh1" alt="logo" src={Logo}/>uiz</h1>
          </div>
        <h2>Menu</h2>
          <div className="bouton">
            <div className="butdiv">
              <a href="/Quiz/LogoQuiz">Logo Quiz</a>
              <a href="/Quiz/AnimalQuiz">Animal Quiz</a>
              <a href="/Quiz/Credit">Credit</a>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
