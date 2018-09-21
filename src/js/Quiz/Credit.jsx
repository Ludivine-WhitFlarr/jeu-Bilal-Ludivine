import React, { Component } from 'react';

import Logo from "../../img/logo-Logo.png";
class Credit extends Component {
  render() {
    return (
      <section className="bodyquiz">
          <div className="Header">

              <h1><img className="imgh1" alt="logo" src={Logo}/>uiz</h1>
          </div>
        <div>
          <h2>Credit</h2>
        </div>
        <p>Un jeu crée et édité par <a href="https://www.edenschool.fr/">Edenschool</a></p>



            <div className="bouton">
              <div className="butdiv">

                <a href="/">Retour</a>
              </div>
            </div>
      </section>
    );
  }
}

export default Credit;
