import React, { Component, Fragment } from 'react';

class AnimalQuiz extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h2>AnimalQuiz</h2>
        </div>
        <div className="bouton">
          <div className="butdiv">
            <a>Facile</a>
            <a>Moyen</a>
            <a>Difficile</a>
            <a href="/">Retour</a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AnimalQuiz;
