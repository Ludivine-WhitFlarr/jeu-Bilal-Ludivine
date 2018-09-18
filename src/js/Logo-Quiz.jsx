import React, { Component, Fragment } from 'react';

class LogoQuiz extends Component {
  render() {
    return (
      <Fragment>
      <div>
        <h2>logoquiz</h2>
      </div>
          <div className="bouton">
            <div className="butdiv">
              <a href="/LogoQuiz">Logo Quiz</a>
              <a href="./AnimalQuiz">Facile</a>
              <a href="./Credit">Moyen</a>
              <a href="./Credit">Difficile</a>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default LogoQuiz;
