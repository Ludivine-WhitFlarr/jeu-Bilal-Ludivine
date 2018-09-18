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
              <a href="/LogoQuiz/Facile">Facile</a>
              <a>Moyen</a>
              <a>Difficile</a>
              <a href="/">Retour</a>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default LogoQuiz;
