import React, { Component, Fragment } from 'react';
import '../css/App.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
          <div className="Header">
              <h1><span>Q</span>uiz</h1>
          </div>
          <div className="bouton">
            <div className="butdiv">
              <a href="/LogoQuiz">Logo Quiz</a>
              <a href="./AnimalQuiz">Animal Quiz</a>
              <a href="./Credit">Credit</a>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default Home;