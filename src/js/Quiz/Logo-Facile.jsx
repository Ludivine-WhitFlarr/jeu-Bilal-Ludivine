import React, { Component} from 'react';
import LogoI from "../../img/logo-Logo.png";
import Adidas from '../../img/logo/Adidas.png';
import Android from '../../img/logo/android.png';
import Apple from '../../img/logo/apple.png';
import BurgerKing from '../../img/logo/burger-king.png';
import Carambar from '../../img/logo/carambar.png';
import CocaCola from '../../img/logo/cocacola.png';
import EdenSchool from '../../img/logo/ednschool.png';
import Pepsi from '../../img/logo/Pepsi.png';
import Puma from '../../img/logo/puma.png';

import Logo from './Logo';

class LogoQuiz extends Component {
  state = {
    nombre: 0,
    score: 0,
    currentIndex: 0,
    nbDeCoups:0,
    img:[
      {
        img: Adidas,
        value: "Adidas"
      },
      {
        img: Android,
        value: "Android"
      },
      {
        img: BurgerKing,
        value: "BurgerKing"
      },
      {
        img: Apple,
        value: "Apple"
      },
      {
        img: CocaCola,
        value: "CocaCola"
      },
      {
        img: Puma,
        value: "Puma"
      },
      {
        img: Carambar,
        value: "Carambar"
      },
      {
        img: EdenSchool,
        value: "EdenSchool"
      },
      {
        img: Pepsi,
        value: "Pepsi"
      }
    ]
  }
  render() {
    const { img, currentIndex, nombre , score, nbDeCoups  } = this.state;

    const current = img[currentIndex];

    return (
      <div className="bodyquiz">
          <div className="Header">

              <h1><img className="imgh1" alt="logo" src={LogoI}/>uiz</h1>
          </div>
      <div className="Quiz">
        <div className="Quizz">
          <p>NbDePartieJoue: {nombre}</p>
          <p>score: {score}</p>
          <p>NbDeCoup: {nbDeCoups}</p>
        </div>
        <h1>Logo Quizzup</h1>
        <Logo key={currentIndex} logo={current.img} name={current.value} onWin={this.onWin} onPlay={this.onPlay} />
      </div>
          <div className="bouton">
            <div className="butdiv game">
              <a href="/LogoQuiz">Retour</a>
            </div>
          </div>
      </div>
    );
  }

  onPlay = () => {
    const { nbDeCoups } = this.state;

    this.setState({
      nbDeCoups: nbDeCoups+1,
    })
  }

  onWin = () => {
    const { nombre, score, img, currentIndex, nbDeCoups  } = this.state;

    this.setState({
      nombre: nombre + 1,
      score: score + 20 - (nbDeCoups - img[currentIndex].value.length),
      currentIndex: (currentIndex + 1) % img.length,
      nbDeCoups: 0
    })
  }
}

export default LogoQuiz;
