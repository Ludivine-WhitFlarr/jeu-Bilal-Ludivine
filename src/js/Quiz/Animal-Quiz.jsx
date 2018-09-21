import React, { Component,Fragment } from 'react';
import Logo from "../../img/logo-Logo.png";
import Abeille from         '../../img/animaux/abeille.jpg';
import Axolotl from         '../../img/animaux/axolotl.jpg';
import Castor from          '../../img/animaux/castor.jpg';
import Cheval from          '../../img/animaux/cheval.jpg';
import Corbeau from         '../../img/animaux/corbeau.jpg';
import Dromadaire from      '../../img/animaux/dromadaire.jpg';
import Emeu from            '../../img/animaux/emeu.jpg';
import Koala from           '../../img/animaux/Koala.jpg';
import Lapin from           '../../img/animaux/lapin.jpg';
import Lion from            '../../img/animaux/lion.jpg';
import Loup from            '../../img/animaux/loup.jpg';
import Narval from          '../../img/animaux/narval.jpg';
import Ocelot from          '../../img/animaux/ocelot.jpg';
import Paresseux from       '../../img/animaux/paresseux.jpg';
import Poisson from         '../../img/animaux/poisson.jpg';
import Renard from          '../../img/animaux/renard.jpg';
import Requin from          '../../img/animaux/requin.jpg';
import Serpent from         '../../img/animaux/serpent.png';
import Tarsier from         '../../img/animaux/tarsier.jpg';
import Tatou from           '../../img/animaux/tatou.jpg';

import Quizz from './Quizz';
class AnimalQuiz extends Component {
  render() {
    return (
      <Fragment>
          <div className="Header">

              <h1><img className="imgh1" alt="logo" src={Logo}/>uiz</h1>
          </div>
      <Quizz title="Animal Quiz" data={[
        {
          img: Cheval,
          value: "Cheval"
        },
        {
          img: Lion,
          value: "Lion"
        },
        {
          img: Axolotl,
          value: "Axolotl"
        },
        {
          img: Emeu,
          value: "Emeu"
        },
        {
          img: Narval,
          value: "Narval"
        },
        {
          img: Renard,
          value: "Renard"
        },
        {
          img: Requin,
          value: "Requin"
        },
        {
          img: Tarsier,
          value: "Tarsier"
        },
        {
          img: Tatou,
          value: "Tatou"
        },
        {
          img: Castor,
          value: "Castor"
        },
        {
          img: Ocelot,
          value: "Ocelot"
        },
        {
          img: Serpent,
          value: "Serpent"
        },
        {
          img: Corbeau,
          value: "Corbeau"
        },
        {
          img: Dromadaire,
          value: "Dromadaire"
        },
        {
          img: Koala,
          value: "Koala"
        },
        {
          img: Lapin,
          value: "Lapin"
        },
        {
          img: Loup,
          value: "Loup"
        },
        {
          img: Poisson,
          value: "Poisson"
        },
        {
          img: Abeille,
          value: "Abeille"
        },
        {
          img: Paresseux,
          value: "Paresseux"
        }
      ]} />
      <div className="bouton game">
        <div className="butdiv">
          <a href="/">Retour</a>
        </div>
      </div>
    </Fragment>
    );
  }
}

export default AnimalQuiz;
